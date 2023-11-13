import { UserDataController } from '../controllers/user.controller';
import { Application, Request, Response } from 'express';

export class UserRoutes{
    private userdata_controller : UserDataController = new UserDataController();
   
    public route(app: Application) {
        app.post('/api/user/createuser', (req: Request, res: Response) => {
            this.userdata_controller
            .create_user(req, res)
            .catch(() => console.log('error on auth/register'));
        });
    }

}