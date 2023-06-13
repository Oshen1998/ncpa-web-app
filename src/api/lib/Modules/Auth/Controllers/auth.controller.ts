import { Request, Response } from 'express';
import {
  duplicateDocuments,
  failureResponse,
  forbiddenError,
  insufficientParameters,
  mongoError,
  notfoundDocument,
  successResponse,
} from '../../Common/responses/common-response-service';
import { ILogin, IUser } from '../Models/user.interface';
import UserService from '../Services/auth.service';
import UserCredentialService from '../Services/credential.service';
import { ValidateSchema } from '../../Common/validation';
import {
  userLoginSchema,
  userRegisterValidationSchema,
} from '../Validations/auth.validation';
import { decrypt, encrypt } from '../../../Modules/Common/encryption';
import { generateAccessToken } from '../../../Modules/Common/services/jwt.service';
export class UserController {
  private user_service: UserService = new UserService();
  private user_credential: UserCredentialService = new UserCredentialService();

  // user registration
  public async create_user(req: Request, res: Response) {
    const isValid = ValidateSchema(userRegisterValidationSchema, req.body);

    if (isValid) {
      const user_params: IUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        nic: req.body.nic,
        account_type: req.body.account_type,
        gender: req.body.gender,
      };

      const isExist = await this.user_service.findByNic(user_params.nic);

      if (isExist) {
        return duplicateDocuments(res);
      }

      const createdUser = await this.user_service.createUser(user_params);
      const { nic, _id } = createdUser;

      if (createdUser) {
        const encryptedPassword = encrypt('123456');
        const credentials: ILogin = {
          username: nic,
          password: encryptedPassword,
          user_id: _id,
        };
        const createdUserCredentials =
          await this.user_credential.createUserCredentials(credentials);
        if (createdUserCredentials) {
          successResponse('Successfully Created!', createdUser, res);
        } else {
          failureResponse(
            'Something went wrong! (When credential adding.)',
            res
          );
        }
      } else {
        failureResponse('Something went wrong! (When user adding).', res);
      }
    } else {
      // error response if some fields are missing in request body
      insufficientParameters(res);
    }
  }

  // user login
  public async user_login(req: Request, res: Response) {
    const isValid = ValidateSchema(userLoginSchema, req.body);

    if (isValid) {
      const { username, password } = req.body;

      const existUser = await this.user_credential.filterUser({
        username: username,
      });

      if (existUser) {
        // need to check password comparison
        const decryptedPassword = decrypt(existUser.password);
        if (decryptedPassword.toString() === password.toString()) {
          // if password matched then get user data and encrypt it using jwt
          const generateToken = await generateAccessToken(
            existUser.user_id.toString()
          );

          if (!generateToken) {
            return failureResponse(
              'Something went wrong with token generating',
              res
            );
          } else {
            successResponse(
              'Successfully Login',
              { token: generateToken },
              res
            );
          }
        } else {
          forbiddenError(res, 'Password Miss match!');
        }
      } else {
        notfoundDocument(res);
      }
    } else {
      insufficientParameters(res);
    }
  }
}
