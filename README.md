# NcpaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

1. Run `npm i` at the **root** and **ncpa-web-app/src/api** for installing dependencies.
2. Install MongoDB Compass, Create a new Connection and click Connect.
3. Add a `.env` file to the **ncpa-web-app/src/api** folder and add these content to it.
   
`DB_URL = [MongoDB Url] PORT = [Desired-Port] TOKEN_SECRET = [Random-Numbers]`

4. Run `npm start` at api folder
5. Run `npm start` at root level
6. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

