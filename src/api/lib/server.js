"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./Config/app");
require('dotenv').config();
var PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, function () {
    console.log('Server Connected Successfully.');
    console.log('Server listening on port:' + PORT);
});
