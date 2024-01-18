import { ApplicationController } from '../controllers/application.controller';
import { Application, Request, Response } from 'express';

export class ApplicationRoutes{
    private userdata_controller : ApplicationController = new ApplicationController();
   
    public route(app: Application) {
        app.post('/api/Applicant/AddPersonalData', (req: Request, res: Response) => {
            this.userdata_controller
            .AddPersonalData(req, res)
            .catch(() => console.log('error on application/AddpersonalData'));
        });

        app.post('/api/Applicant/AddOLResult', (req: Request, res: Response) => {
            this.userdata_controller
            .AddOLExaminationData(req, res)
            .catch(() => console.log('error on application/AddOLResult'));
        });

        app.post('/api/Applicant/AddALResult', (req: Request, res: Response) => {
            this.userdata_controller
            .AddALExaminationData(req, res)
            .catch(() => console.log('error on application/addALResult'));
        });

        app.post('/api/Applicant/AddDegree', (req: Request, res: Response) => {
            this.userdata_controller
            .AddDegreeData(req, res)
            .catch(() => console.log('error on application/AddDegree'));
        });

        app.post('/api/Applicant/AddMasterDegree', (req: Request, res: Response) => {
            this.userdata_controller
            .AddMasterDegreeData(req, res)
            .catch(() => console.log('error on application/AddMasterDegree'));
        });

        app.post('/api/Applicant/AddProfessionalData', (req: Request, res: Response) => {
            this.userdata_controller
            .AddProfessionalData(req, res)
            .catch(() => console.log('error on application/AddProfessionalData'));
        });

        app.post('/api/Applicant/addWorkingExperienceData', (req: Request, res: Response) => {
            this.userdata_controller
            .addWorkingExperienceData(req, res)
            .catch(() => console.log('error on application/addWorkingExperienceData'));
        });
    }

}