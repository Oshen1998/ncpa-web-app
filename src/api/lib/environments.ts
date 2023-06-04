enum Environments {
  LOCAL_ENV = 'LOCAL',
  DEV_ENV = 'DEV',
  PROD_ENV = 'PROD',
  QA_ENV = 'QA',
}

class Environment {
  private environment: string;

  constructor(environment: string) {
    this.environment = environment;
  }

  getPort(): number {
    if (this.environment === Environments.PROD_ENV) {
      return 8081;
    } else if (this.environment === Environments.DEV_ENV) {
      return 8082;
    } else if (this.environment === Environments.QA_ENV) {
      return 8083;
    } else {
      return 3000;
    }
  }

  getDBName(): string {
    if (this.environment === Environments.PROD_ENV) {
      return 'db_ncpa_prod';
    } else if (this.environment === Environments.DEV_ENV) {
      return 'db_ncpa_dev';
    } else if (this.environment === Environments.QA_ENV) {
      return 'db_ncpa_qa';
    } else {
      return 'db_ncpa_local';
    }
  }
}

export default new Environment(Environments.LOCAL_ENV);
