"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
    },
    nic: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
        require: false,
    },
    gender: {
        type: String,
        require: false,
    },
    account_type: {
        type: String,
        enum: ["ADMIN" /* USER_TYPES.ADMIN */, "USER" /* USER_TYPES.USER */],
        default: "USER" /* USER_TYPES.USER */,
        require: true,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
});
exports.default = mongoose.model('user', schema);
