import mongoose, { Types } from 'mongoose';
import { DEGREETYPES,GENDER,SALUTATION,CIVILL_STATUS,GRADE,STREAM,STATUS,GRADEOFDEGREE } from '../../constants/index';

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
    states:STATUS;  
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

export interface IDegree{
    _id?:Types.ObjectId;
    ApplicantId: Types.ObjectId;
    degree : String;
    university : String;
    grade:GRADEOFDEGREE;
    AwardDate:Date;
    EffectiveDate:Date;
}

export interface IMasterDegree{
    _id?:Types.ObjectId;
    ApplicantId: Types.ObjectId;
    degree : String;
    university : String;
    AwardDate:Date;
    EffectiveDate:Date;
}

export interface IProfessional{
    _id?:Types.ObjectId;
    ApplicantId: Types.ObjectId;
    Diplomatype: DEGREETYPES,
    Field : String;
    Institution : String;
    AwardDate:Date;
    Duration:Date;
}

export interface IWorkingExperience{
    _id?:Types.ObjectId;
    ApplicantId: Types.ObjectId;
    Employer: string,
    Designation : String;
    StartDate : Date;
    EndDate:Date;
}