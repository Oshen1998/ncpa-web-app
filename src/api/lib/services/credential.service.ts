import { ILogin, IUser } from '../models/user.interface';
import credential from '../schema/users-credential.schema';

export default class UserCredentialService {
  public createUserCredentials(user_params: ILogin) {
    const _session = new credential(user_params);
    return _session.save();
  }

  public async filterUser(query: any): Promise<ILogin> {
    const user =  credential.findOne(query);
    return user;
  }

  public findById(nic: string) {
    return credential.findById(nic);
  }

  public updateUser(user_params: IUser) {
    const query = { _id: user_params._id };
    return credential.findOneAndUpdate(query, user_params);
  }

  public deleteUser(_id: String, callback: any) {
    const query = { _id: _id };
    credential.deleteOne(query, callback);
  }
}
