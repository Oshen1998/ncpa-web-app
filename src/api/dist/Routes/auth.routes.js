"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const auth_controller_1 = require("../Modules/Auth/Controllers/auth.controller");
class AuthRoutes {
  constructor() {
    this.user_controller = new auth_controller_1.UserController();
  }
  route(app) {
    app.post("/api/auth/register", (req, res) => {
      this.user_controller
        .create_user(req, res)
        .catch(() => console.log("error on auth/register"));
    });
    app.post("/api/auth/login", (req, res) => {
      this.user_controller.user_login(req, res);
    });
  }
}
exports.AuthRoutes = AuthRoutes;
