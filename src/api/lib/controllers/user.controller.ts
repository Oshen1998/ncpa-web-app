import { Request, Response } from 'express';
import {
    duplicateDocuments,
    failureResponse,
    forbiddenError,
    insufficientParameters,
    mongoError,
    notfoundDocument,
    successResponse,
  } from '../constants/common-response-service';
import { ValidateSchema } from '../middleware/validation';
import {userbasicdataValidationSchema} from '../schema/user.validation'
import {Iuserdata} from '../models/userdata'
import UserDataServis from '../services/userData.servis'

export class UserDataController{
    private userdata_servis: UserDataServis = new UserDataServis();

    //create new user
    public async create_user(req: Request,res:Response){
        const isValid = ValidateSchema(userbasicdataValidationSchema,req.body);

        if(isValid){
            const user_params:Iuserdata = {
                name: req.body.name,
                salutation: req.body.salutation,
                name_in: req.body.name_in,
                dob: req.body.dob,
                sex: req.body.sex,
                nic: req.body.nic,
                civil_status: req.body.civil_status,
                nationality: req.body.nationality,
                permanent_address: req.body.permanent_address,
                number: req.body.number,
                email: req.body.email,             
            };
            const isExist = await this.userdata_servis.findByNic(user_params.nic);
            
            if(isExist){
                return duplicateDocuments(res);
            }

            const createduser = await this.userdata_servis.createUser(user_params);
            const { nic, _id } = createduser;

            if(createduser){
                successResponse('Successfully Created!', _id, res)
            }else {
                failureResponse(
                  'Something went wrong! (When user adding)',
                  res
                );
            }
        }else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }
}