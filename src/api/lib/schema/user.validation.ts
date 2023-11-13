import {GENDER,SALUTATION,CIVILL_STATUS} from '../constants/index'

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
        civil_status :{enum:[CIVILL_STATUS.Married,CIVILL_STATUS.SINGLE]},
        nationality: { type: 'string' },
        permanent_address: { type: 'string' },
        number: { type: 'number', nullable: false },
        email: { type: 'string' },        
    },
    required: ['name','name_in','dob','sex','nic','nationality','permanent_address','number','email'],
    additionalProperties: false, 
}