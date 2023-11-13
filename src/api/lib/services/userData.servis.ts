import { Types } from 'mongoose';
import{Iuserdata} from '../models/userdata'
import userdata,{IUserdataModel} from '../schema/userData'

export default class UserDataServis{
    public async createUser(user_params:Iuserdata): Promise<IUserdataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }

    public findByNic(nic:string):Promise<IUserdataModel>{
        return userdata.findOne({nic:nic});
    }
}