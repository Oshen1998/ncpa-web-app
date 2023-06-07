import { USER_TYPES } from 'Modules/Common/constants';
import * as mongoose from 'mongoose';
import { IUser } from '../Models/user.interface';

const Schema = mongoose.Schema;
export type IUserModel = Document & IUser;

const schema = new Schema<IUserModel>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  nic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  account_type: {
    type: String,
    enum: [USER_TYPES.ADMIN, USER_TYPES.USER],
    default: USER_TYPES.USER,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('user', schema);
