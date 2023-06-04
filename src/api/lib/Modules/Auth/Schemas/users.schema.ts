import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: {
      first_name: String,
      last_name: String,
    },
  },
  email: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: false,
  },
  gender: {
    type: String,
  },
  account_type: {
    type: String,
    require: true,
  },
  nic: {
    type: String,
    require: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('users', schema);
