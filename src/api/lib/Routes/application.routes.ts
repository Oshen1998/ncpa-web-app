import { ApplicationController } from '../controllers/application.controller';
import { Application, Request, Response } from 'express';

export class ApplicationRoutes{
    private userdata_controller : ApplicationController = new ApplicationController();
   
    public route(app: Application) {
        app.post('/api/Applicant/AddPersonalData', (req: Request, res: Response) => {
            this.userdata_controller
            .AddPersonalData(req, res)
            .catch(() => console.log('error on auth/AddData'));
        });
    }

}