import { USER_TYPES } from 'Modules/Common/constants';
import mongoose, { Types } from 'mongoose';

export interface IUser {
  _id?: Types.ObjectId;
  first_name: string;
  last_name?: string;
  nic: string;
  email: string;
  account_type: USER_TYPES;
  phone_number?: string;
  gender?: string;
  is_deleted?: boolean;
}
export interface ILogin {
  user_id: mongoose.Types.ObjectId | string;
  username: string;
  password: string;
}
