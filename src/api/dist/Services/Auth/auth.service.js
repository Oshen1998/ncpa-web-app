"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = require("../../Modules/Auth/Schemas/users.schema");
class UserService {
    createUser(user_params, callback) {
        const _session = new users_schema_1.default(user_params);
        _session.save(callback);
    }
    filterUser(query, callback) {
        users_schema_1.default.findOne(query, callback);
    }
    updateUser(user_params, callback) {
        const query = { _id: user_params._id };
        users_schema_1.default.findOneAndUpdate(query, user_params, callback);
    }
    deleteUser(_id, callback) {
        const query = { _id: _id };
        users_schema_1.default.deleteOne(query, callback);
    }
}
exports.default = UserService;
