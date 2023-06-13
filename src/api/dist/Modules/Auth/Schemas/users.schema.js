"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    nic: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    account_type: {
        type: String,
        enum: ["ADMIN" /* USER_TYPES.ADMIN */, "USER" /* USER_TYPES.USER */],
        default: "USER" /* USER_TYPES.USER */,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
});
exports.default = mongoose.model('user', schema);
