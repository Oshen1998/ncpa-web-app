import {DEGREETYPES,GENDER,SALUTATION,CIVILL_STATUS,GRADE,STREAM,STATUS,GRADEOFDEGREE} from '../constants/index'

export const userbasicdataValidationSchema ={
    type: 'object',
    properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        salutation :{enum:[SALUTATION.MISS,SALUTATION.MR,SALUTATION.MRS]},
        name_in: { type: 'string' },
        dob: { type: 'string' },
        sex: { enum: [GENDER.MALE, GENDER.FEMALE] },
        nic: { type: 'string' },
        civil_status :{enum:[CIVILL_STATUS.MARRIED,CIVILL_STATUS.SINGLE]},
        nationality: { type: 'string' },
        permanent_address: { type: 'string' },
        number: { type: 'number', nullable: false },
        email: { type: 'string' },
        states:{enum:[STATUS.External,STATUS.Internal]},        
    },
    required: ['name','name_in','dob','sex','nic','nationality','permanent_address','number','email'],
    additionalProperties: false, 
};
export const OLExaminationValidationSchema = {
    type:'object',
    properties:{
        _id:{type:'string'},
        ApplicantId:{type:'string'},
        year:{type:'string'},
        index_no:{type:'number'},
        Sinhala:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        English:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        Mathematics:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        Science:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        Religion:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        History:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        Basket1:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        Basket2:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        Basket3:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
    },
    required:['ApplicantId','year','index_no','Sinhala','English','Mathematics','Science','Religion','History','Basket1','Basket2','Basket3'],
    additionalProperties: false,
};
export const ALExaminationValidationSchema = {
    type:'object',
    properties:{
        _id:{type:'string'},
        ApplicantId:{type:'string'},
        year:{type:'string'},
        index_no:{type:'number'},
        stream:{enum:[STREAM.Arts,STREAM.Biological,STREAM.Maths,STREAM.Technology]},
        sub1Name:{type:'string'},
        sub1Grade:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        sub2Name:{type:'string'},
        sub2Grade:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},
        sub3Name:{type:'string'},
        sub4Grade:{enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S]},        
    },
    required:['ApplicantId','year','index_no','stream','sub1Name','sub1Grade','sub2Name','sub2Grade','sub3Name','sub3Grade'],
    additionalProperties: false,
};
export const DegreeValidationSchema = {
    type:'object',
    properties:{
        _id:{type:'string'},
        ApplicantId:{type:'string'},
        degree:{type:'string'},
        university:{type:'string'},
        grade:{enum:[GRADEOFDEGREE.First_Class_Honours,GRADEOFDEGREE.Lower_Second_Class_Honours,GRADEOFDEGREE.Genaral_Honours,GRADEOFDEGREE.Upper_Second_Class_Honours]},
        AwardDate:{type:'date'},
        EffectiveDate:{type:'date'},
    },
    required:['ApplicantId','degree','university','AwardDate','EffectiveDate'],
    additionalProperties: false,
};

export const MasterDegreeValidationSchema = {
    type:'object',
    properties:{
        _id:{type:'string'},
        ApplicantId:{type:'string'},
        degree:{type:'string'},
        university:{type:'string'},
        AwardDate:{type:'date'},
        EffectiveDate:{type:'date'},
    },
    required:['ApplicantId','degree','university','AwardDate','EffectiveDate'],
    additionalProperties: false,
};

export const ProfessionalDataValidationSchema = {
    type:'object',
    properties:{
        _id:{type:'string'},
        ApplicantId:{type:'string'},
        Diplomatype:{enum:[DEGREETYPES.Advance_Diploma,DEGREETYPES.Certificate,DEGREETYPES.Diploma,DEGREETYPES.NVQ_Level]},
        Field:{type:'string'},
        Institution:{type:'string'},
        AwardDate:{type:'date'},
        Duration:{type:'date'},
    },
    required:['ApplicantId','Diplomatype','Field','Institution','AwardDate','Duration'],
    additionalProperties: false,
};

export const WorkingExperienceDataValidationSchema = {
    type:'object',
    properties:{
        _id:{type:'string'},
        ApplicantId:{type:'string'},
        Employer:{type:'string'},
        Designation:{type:'string'},
        StartDate:{type:'date'},
        EndDate:{type:'date'},
    },
    required:['ApplicantId','Employer','Designation','StartDate','EndDate'],
    additionalProperties: false,
};