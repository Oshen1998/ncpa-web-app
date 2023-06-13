import * as mongoose from 'mongoose';
import { ILogin } from '../Models/user.interface';

const Schema = mongoose.Schema;
export type ILoginModel = Document & ILogin;

const schema = new Schema<ILoginModel>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model('user_credential', schema);
