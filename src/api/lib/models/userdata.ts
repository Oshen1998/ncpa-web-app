import mongoose, { Types } from 'mongoose';
import { GENDER,SALUTATION,CIVILL_STATUS } from '../constants/index';

export interface Iuserdata{
    _id?: Types.ObjectId;
    name: string;
    salutation :SALUTATION;
    name_in: string;
    dob: string;
    sex: GENDER;
    nic: string;
    civil_status:CIVILL_STATUS;
    nationality: string;
    permanent_address : string;
    number : number;
    email:string;  
}