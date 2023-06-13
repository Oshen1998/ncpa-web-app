"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const missmatch_routes_1 = require("../Routes/missmatch.routes");
const auth_routes_1 = require("../Routes/auth.routes");
require('dotenv').config();
class App {
    constructor() {
        this.mongoUrl = process.env.DB_URL;
        this.mismatch_route = new missmatch_routes_1.MissMatchRoutes();
        this.auth_routes = new auth_routes_1.AuthRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.auth_routes.route(this.app);
        this.mismatch_route.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoose
                .connect(this.mongoUrl, {})
                .then((data) => {
                console.log('DB Connected Successfully.');
            })
                .catch((e) => {
                console.log('DB Error ');
                console.log(e);
            });
        });
    }
}
exports.default = new App().app;
