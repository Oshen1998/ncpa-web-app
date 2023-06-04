"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./Config/app");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log('Server Connected Successfully.');
    console.log('Server listening on port:' + PORT);
});
