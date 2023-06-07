import { Request, Response } from 'express';
import {
  duplicateDocuments,
  failureResponse,
  insufficientParameters,
  mongoError,
  notfoundDocument,
  successResponse,
} from '../../Modules/Common/responses/common-response-service';
import { ILogin, IUser } from '../../Modules/Auth/Models/user.interface';
import UserService from '../../Services/Auth/auth.service';
import UserCredentialService from '../../Services/Auth/credential.service';
import { ValidateSchema } from '../../Modules/Common/validation';
import {
  userLoginSchema,
  userRegisterValidationSchema,
} from '../../Modules/Auth/Validations/auth.validation';
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

      const { nic } = req.body;
      const isExist = await this.user_service.findById(nic);

      if (!isExist) {
        return duplicateDocuments(res);
      }

      const createdUser = await this.user_service.createUser(user_params);
      if (createdUser) {
        successResponse('Successfully Created', createdUser, res);
      } else {
        failureResponse('Something went wrong.', res);
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

      const existUser = await this.user_service.findById(username);

      if (existUser) {
        const user_params: ILogin = {
          username: username,
          password: password,
          user_id: existUser._id,
        };
        const createdUser = this.user_credential.createUser(user_params);
        successResponse('Successfully Created', createdUser, res);
      } else {
        notfoundDocument(res);
      }
    } else {
      insufficientParameters(res);
    }
  }
}
