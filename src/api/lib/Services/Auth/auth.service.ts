import { IUser } from 'Modules/Auth/Models/user.interface';
import users, { IUserModel } from '../../Modules/Auth/Schemas/users.schema';
import { Types } from 'mongoose';

export default class UserService {
  public async createUser(user_params: IUser): Promise<IUserModel> {
    const _session = new users(user_params);
    return await _session.save();
  }

  public findById(nic: string): Promise<IUserModel> {
    return users.findById(nic);
  }

  public async filterUser(query: any): Promise<IUserModel> {
    return users.findOne(query);
  }

  public updateUser(user_params: IUser): Promise<IUserModel> {
    const query = { _id: user_params._id };
    return users.findOneAndUpdate(query, user_params);
  }

  public deleteUser(_id: Types.ObjectId) {
    const query = { _id: _id };
    return users.deleteOne(query);
  }
}
