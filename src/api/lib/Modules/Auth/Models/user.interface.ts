import { Types } from 'mongoose';

interface IName {
  first_name: string;
  last_name: string;
}

export interface IUser {
  _id?: Types.ObjectId;
  name: IName;
  email: String;
  phone_number?: String;
  account_type: string;
  nic: string;
  gender?: String;
  is_deleted?: Boolean;
}
