import { Request, Response } from 'express';
import e = require('express');
import {
  insufficientParameters,
  mongoError,
  successResponse,
} from 'Modules/Common/common-response-service';
import { IUser } from 'Modules/Auth/Models/user.interface';
import UserService from 'Services/Auth/auth.service';

export class UserController {
  private user_service: UserService = new UserService();

  public create_user(req: Request, res: Response) {
    // TODO: Need to implement AJV Validation
    if (
      req.body.name &&
      req.body.name.first_name &&
      req.body.name.middle_name &&
      req.body.name.last_name &&
      req.body.email &&
      req.body.phone_number &&
      req.body.gender
    ) {
      const user_params: IUser = {
        name: {
          first_name: req.body.name.first_name,
          last_name: req.body.name.last_name,
        },
        email: req.body.email,
        phone_number: req.body.phone_number,
        nic: req.body.nic,
        account_type: req.body.account_type,
        gender: req.body.gender,
      };
      this.user_service.createUser(
        user_params,
        (err: any, user_data: IUser) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse('create user successfully.', user_data, res);
          }
        }
      );
    } else {
      // error response if some fields are missing in request body
      insufficientParameters(res);
    }
  }

  public get_user(req: Request, res: Response) {
    if (req.params.id) {
      const user_filter = { _id: req.params.id };
      this.user_service.filterUser(
        user_filter,
        (err: any, user_data: IUser) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse('get user successfully.', user_data, res);
          }
        }
      );
    } else {
      insufficientParameters(res);
    }
  }
}
