"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_response_service_1 = require("Modules/Common/common-response-service");
const auth_service_1 = require("Services/Auth/auth.service");
class UserController {
    constructor() {
        this.user_service = new auth_service_1.default();
    }
    create_user(req, res) {
        // TODO: Need to implement AJV Validation
        if (req.body.name &&
            req.body.name.first_name &&
            req.body.name.middle_name &&
            req.body.name.last_name &&
            req.body.email &&
            req.body.phone_number &&
            req.body.gender) {
            const user_params = {
                name: {
                    first_name: req.body.name.first_name,
                    last_name: req.body.name.last_name,
                },
                email: req.body.email,
                phone_number: req.body.phone_number,
                nic: req.body.nic,
                account_type: req.body.account_type,
                gender: req.body.gender,
            };
            this.user_service.createUser(user_params, (err, user_data) => {
                if (err) {
                    (0, common_response_service_1.mongoError)(err, res);
                }
                else {
                    (0, common_response_service_1.successResponse)('create user successfully.', user_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            (0, common_response_service_1.insufficientParameters)(res);
        }
    }
    get_user(req, res) {
        if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, (err, user_data) => {
                if (err) {
                    (0, common_response_service_1.mongoError)(err, res);
                }
                else {
                    (0, common_response_service_1.successResponse)('get user successfully.', user_data, res);
                }
            });
        }
        else {
            (0, common_response_service_1.insufficientParameters)(res);
        }
    }
}
exports.UserController = UserController;
