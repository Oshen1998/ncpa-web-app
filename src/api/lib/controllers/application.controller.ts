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
import {userbasicdataValidationSchema,OLExaminationValidationSchema,ALExaminationValidationSchema,DegreeValidationSchema,MasterDegreeValidationSchema,ProfessionalDataValidationSchema,WorkingExperienceDataValidationSchema} from '../schema/ApplicationData.validation'
import {IApplicationData,IOLExamination,IALExamination,IDegree, IMasterDegree,IProfessional,IWorkingExperience} from '../models/interface/ApplicationData.interface'
import ApplicatinpersonalDataServis from '../services/Application/ApplicationPersonalDataData.servis'
import OLExaminationServis from '../services/Application/OLExamition.servis'
import ALExaminationServis from '../services/Application/ALExamition.servid'
import DegreeServis from '../services/Application/Degree.servis';
import MasterDegreeServis from '../services/Application/MasterDegree.servis';
import ProfessionalServis from '../services/Application/ProfessionaData.servies'
import WorkingExperienceServis from '../services/Application/WorkingExperience'

export class ApplicationController{
    private userdata_servis: ApplicatinpersonalDataServis = new ApplicatinpersonalDataServis();
    private olExamination_servis: OLExaminationServis = new OLExaminationServis(); 
    private alExamination_servis: ALExaminationServis = new ALExaminationServis();
    private degree_servis: DegreeServis = new DegreeServis();
    private masterdegree_servis: MasterDegreeServis = new MasterDegreeServis();
    private professional_servis: ProfessionalServis= new ProfessionalServis();
    private WorkingExperience_Servis: WorkingExperienceServis = new WorkingExperienceServis();

    //Add Applicant Personal Data
    public async AddPersonalData(req: Request,res:Response){
        const isValid = ValidateSchema(userbasicdataValidationSchema,req.body);

        if(isValid){
            const user_params:IApplicationData = {
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
                states:req.body.states             
            };
            const isExist = await this.userdata_servis.findByNic(user_params.nic);
            
            if(isExist){
                return duplicateDocuments(res);
            }

            const createduser = await this.userdata_servis.AddData(user_params);
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

    //Add Applicant OL Examination Result
    public async AddOLExaminationData(req: Request,res:Response){
        const isValid = ValidateSchema(OLExaminationValidationSchema,req.body);

        if(isValid){
            const user_params:IOLExamination = {
                ApplicantId:req.body.ApplicantId,
                year:req.body.year,
                index_no:req.body.index_no,
                Sinhala :req.body.Sinhala,
                English :req.body.English,
                Mathematics :req.body.Mathematics,
                Science :req.body.Science,
                Religion :req.body.Religion,
                History :req.body.History,
                Basket1 :req.body.Basket1,
                Basket2 :req.body.Basket2,
                Basket3 :req.body.Basket3,           
            };

            const isExist1 = await this.userdata_servis.recordExistsById(user_params.ApplicantId);
            
            if(isExist1){
                return forbiddenError(res,"Applicant Parsanal Data not Found");
            }

            const isExist2 = await this.olExamination_servis.findByIndex(user_params.index_no);
            
            if(isExist2){
                return duplicateDocuments(res);
            }

            const createduser = await this.olExamination_servis.AddData(user_params);
            const { ApplicantId } = createduser;

            if(createduser){
                successResponse('Successfully Created!', ApplicantId, res)
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

    //Add Applicant AL Examination Result
    public async AddALExaminationData(req: Request,res:Response){
        const isValid = ValidateSchema(ALExaminationValidationSchema,req.body);

        if(isValid){
            const user_params:IALExamination = {
                ApplicantId:req.body.ApplicantId,
                year:req.body.year,
                index_no:req.body.index_no,
                stream:req.body.stream,
                sub1Name :req.body.sub1Name,
                sub1Grade :req.body.sub1Grade,
                sub2Name :req.body.sub2Name,
                sub2Grade :req.body.sub2Grade,
                sub3Name :req.body.sub3Name,
                sub3Grade :req.body.sub3Grade,           
            };

            const isExist1 = await this.userdata_servis.recordExistsById(user_params.ApplicantId);
            
            if(isExist1){
                return forbiddenError(res,"Applicant Parsanal Data not Found");
            }

            const isExist2 = await this.alExamination_servis.findByIndex(user_params.index_no);
            
            if(isExist2){
                return duplicateDocuments(res);
            }

            const createduser = await this.alExamination_servis.AddData(user_params);
            const { ApplicantId } = createduser;

            if(createduser){
                successResponse('Successfully Created!', ApplicantId, res)
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
    
    //Add Applicant Degree
    public async AddDegreeData(req: Request,res:Response){
        const isValid = ValidateSchema(DegreeValidationSchema,req.body);

        if(isValid){
            const user_params:IDegree = {
                ApplicantId:req.body.ApplicantId,
                degree:req.body.degree,
                university:req.body.university,
                grade:req.body.grade,
                AwardDate:req.body.AwardDate,
                EffectiveDate:req.body.EffectiveDate,           
            };

            const isExist = await this.userdata_servis.recordExistsById(user_params.ApplicantId);
            
            if(isExist){
                return forbiddenError(res,"Applicant Parsanal Data not Found");
            }
            const createduser = await this.degree_servis.AddData(user_params);
            const { ApplicantId } = createduser;

            if(createduser){
                successResponse('Successfully Created!', ApplicantId, res)
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

    //Add Applicant MasterDegree
    public async AddMasterDegreeData(req: Request,res:Response){
        const isValid = ValidateSchema(MasterDegreeValidationSchema,req.body);

        if(isValid){
            const user_params:IMasterDegree = {
                ApplicantId:req.body.ApplicantId,
                degree:req.body.degree,
                university:req.body.university,
                AwardDate:req.body.AwardDate,
                EffectiveDate:req.body.EffectiveDate,           
            };

            const isExist = await this.userdata_servis.recordExistsById(user_params.ApplicantId);
            
            if(isExist){
                return forbiddenError(res,"Applicant Parsanal Data not Found");
            }

            const createduser = await this.masterdegree_servis.AddData(user_params);
            const { ApplicantId } = createduser;

            if(createduser){
                successResponse('Successfully Created!', ApplicantId, res)
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
    
    //Add Applicant Professional Data
    public async AddProfessionalData(req: Request,res:Response){
        const isValid = ValidateSchema(ProfessionalDataValidationSchema,req.body);

        if(isValid){
            const user_params:IProfessional = {
                ApplicantId:req.body.ApplicantId,
                dtype:req.body.dtype,
                Field:req.body.Field,
                Institution:req.body.Institution,
                AwardDate:req.body.AwardDate,
                Duration:req.body.Duration,           
            };

            const isExist = await this.userdata_servis.recordExistsById(user_params.ApplicantId);
            
            if(isExist){
                return forbiddenError(res,"Applicant Parsanal Data not Found");
            }

            const createduser = await this.professional_servis.AddData(user_params);
            const { ApplicantId } = createduser;

            if(createduser){
                successResponse('Successfully Created!', ApplicantId, res)
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

    //Add Applicant Working Experience Data
    public async addWorkingExperienceData(req: Request,res:Response){
        const isValid = ValidateSchema(WorkingExperienceDataValidationSchema,req.body);

        if(isValid){
            const user_params:IWorkingExperience = {
                ApplicantId:req.body.ApplicantId,
                Employer:req.body.Employer,
                Designation:req.body.Designation,
                StartDate:req.body.StartDate,
                EndDate:req.body.EndDate,           
            };

            const isExist = await this.userdata_servis.recordExistsById(user_params.ApplicantId);
            
            if(isExist){
                return forbiddenError(res,"Applicant Parsanal Data not Found");
            }

            const createduser = await this.WorkingExperience_Servis.AddData(user_params);
            const { ApplicantId } = createduser;

            if(createduser){
                successResponse('Successfully Created!', ApplicantId, res)
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