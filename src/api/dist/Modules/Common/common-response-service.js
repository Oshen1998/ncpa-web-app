"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const common_status_codes_1 = require("./common-status-codes");
function successResponse(message, DATA, res) {
    res.status(common_status_codes_1.RESPONSE_STATUS_CODES.SUCCESS).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        SUCCESS: true,
        DATA,
    });
}
exports.successResponse = successResponse;
function failureResponse(message, DATA, res) {
    res.status(common_status_codes_1.RESPONSE_STATUS_CODES.SUCCESS).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
        DATA,
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(common_status_codes_1.RESPONSE_STATUS_CODES.BAD_REQUEST).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {},
    });
}
exports.insufficientParameters = insufficientParameters;
function mongoError(err, res) {
    res.status(common_status_codes_1.RESPONSE_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
        STATUS: 'FAILURE',
        MESSAGE: 'MongoDB error',
        DATA: err,
    });
}
exports.mongoError = mongoError;
