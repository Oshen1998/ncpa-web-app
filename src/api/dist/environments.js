"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["LOCAL_ENV"] = "LOCAL";
    Environments["DEV_ENV"] = "DEV";
    Environments["PROD_ENV"] = "PROD";
    Environments["QA_ENV"] = "QA";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Environments.PROD_ENV) {
            return 8081;
        }
        else if (this.environment === Environments.DEV_ENV) {
            return 8082;
        }
        else if (this.environment === Environments.QA_ENV) {
            return 8083;
        }
        else {
            return 3000;
        }
    }
    getDBName() {
        if (this.environment === Environments.PROD_ENV) {
            return 'db_ncpa_prod';
        }
        else if (this.environment === Environments.DEV_ENV) {
            return 'db_ncpa_dev';
        }
        else if (this.environment === Environments.QA_ENV) {
            return 'db_ncpa_qa';
        }
        else {
            return 'db_ncpa_local';
        }
    }
}
exports.default = new Environment(Environments.LOCAL_ENV);
