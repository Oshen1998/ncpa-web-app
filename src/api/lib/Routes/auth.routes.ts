import { UserController } from '../Modules/Auth/Controllers/auth.controller';
import { Application, Request, Response } from 'express';

export class AuthRoutes {
  private user_controller: UserController = new UserController();

  public route(app: Application) {
    app.post('/api/auth/register', (req: Request, res: Response) => {
      this.user_controller
        .create_user(req, res)
        .catch(() => console.log('error on auth/register'));
    });
    app.post('/api/auth/login', (req: Request, res: Response) => {
      this.user_controller.user_login(req, res);
    });
  }
}
