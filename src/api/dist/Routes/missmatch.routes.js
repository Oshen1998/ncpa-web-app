"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissMatchRoutes = void 0;
class MissMatchRoutes {
    route(app) {
        // Mismatch URL
        app.all('*', function (req, res) {
            res.status(404).send({ error: true, message: 'Invalid URL - 404' });
        });
    }
}
exports.MissMatchRoutes = MissMatchRoutes;
