import { Request, Response } from 'express';
import {
  duplicateDocuments,
  failureResponse,
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
import { encrypt } from '../../../Modules/Common/encryption';
export class UserController {
  private user_service: UserService = new UserService();
  private user_credential: UserCredentialService = new UserCredentialService();

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

  public async user_login(req: Request, res: Response) {
    const isValid = ValidateSchema(userLoginSchema, req.body);

    if (isValid) {
      const { username, password } = req.body;

      const existUser = await this.user_service.findByNic(username);

      if (existUser) {
        //
      } else {
        notfoundDocument(res);
      }
    } else {
      insufficientParameters(res);
    }
  }
}
