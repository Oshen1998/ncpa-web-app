import mongoose, { Types } from 'mongoose';
import { GENDER,SALUTATION,CIVILL_STATUS,GRADE,STREAM } from '../../constants/index';

export interface IApplicationData{
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

export interface IOLExamination{
    _id?:Types.ObjectId;
    ApplicantId: Types.ObjectId;
    year : string;
    index_no:number;
    Sinhala : GRADE;
    English : GRADE;
    Mathematics : GRADE;
    Science : GRADE;
    Religion : GRADE;
    History :GRADE;
    Basket1 :GRADE;
    Basket2 :GRADE;
    Basket3 :GRADE;
}

export interface IALExamination{
    _id?:Types.ObjectId;
    ApplicantId: Types.ObjectId;
    year : string;
    index_no:number;
    stream : STREAM;
    sub1Name : string;
    sub1Grade: GRADE;
    sub2Name : string;
    sub2Grade: GRADE;
    sub3Name : string;
    sub3Grade: GRADE;
}