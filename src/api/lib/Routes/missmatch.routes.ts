import { Application, Request, Response } from 'express';

export class MissMatchRoutes {
  public route(app: Application) {
    // Mismatch URL
    app.all('*', function (req: Request, res: Response) {
      res.status(404).send({ error: true, message: 'Invalid URL - 404' });
    });
  }
}
