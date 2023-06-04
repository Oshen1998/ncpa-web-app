import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { TestRoutes } from '../Routes/test.routes';
import { MissMatchRoutes } from '../Routes/missmatch.routes';
require('dotenv').config();

class App {
  public app: express.Application;
  public mongoUrl = process.env.DB_URL;

  private test_routes: TestRoutes = new TestRoutes();
  private mismatch_route: MissMatchRoutes = new MissMatchRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.mismatch_route.route(this.app);
    this.test_routes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private async mongoSetup() {
    mongoose
      .connect(this.mongoUrl, {})
      .then((data) => {
        console.log('DB Connected Successfully.');
      })
      .catch((e) => {
        console.log('DB Error ');
        console.log(e);
      });
  }
}

export default new App().app;
