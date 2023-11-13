import * as mongoose from 'mongoose';
import {Iuserdata} from '../models/userdata';
import{SALUTATION,GENDER,CIVILL_STATUS} from '../constants/index';

const Schema = mongoose.Schema;
export type IUserdataModel = Document & Iuserdata;

const schema = new Schema<IUserdataModel>({
    name:{
        type:String,
        required: true,
    },
    salutation:{
        type : String,
        enum:[SALUTATION.MISS,SALUTATION.MR,SALUTATION.MRS],
        required:true,
    },
    name_in:{
        type:String,
        required: true,
    },
    dob:{
        type:String,
        required: true,
    },
    sex:{
        type : String,
        enum:[GENDER.FEMALE,GENDER.MALE],
        required:true,
    },
    nic:{
        type:String,
        required: true,
    },
    civil_status:{
        type : String,
        enum:[CIVILL_STATUS.Married,CIVILL_STATUS.SINGLE],
        required:true,
    },
    nationality:{
        type:String,
        required: true,
    },
    permanent_address:{
        type:String,
        required: true,
    },
    number:{
        type:Number,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
});

export default mongoose.model("userdata",schema);