"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissMatchRoutes = void 0;
var MissMatchRoutes = /** @class */ (function () {
    function MissMatchRoutes() {
    }
    MissMatchRoutes.prototype.route = function (app) {
        // Mismatch URL
        app.all('*', function (req, res) {
            res.status(404).send({ error: true, message: 'Invalid URL - 404' });
        });
    };
    return MissMatchRoutes;
}());
exports.MissMatchRoutes = MissMatchRoutes;
