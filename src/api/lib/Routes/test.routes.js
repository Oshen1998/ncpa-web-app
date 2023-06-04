"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
var TestRoutes = /** @class */ (function () {
    function TestRoutes() {
    }
    TestRoutes.prototype.route = function (app) {
        app.get('/api/test', function (req, res) {
            res.status(200).json({ message: 'Get request successfully' });
        });
        app.post('/api/test', function (req, res) {
            res.status(200).json({ message: 'Post request successfully' });
        });
    };
    return TestRoutes;
}());
exports.TestRoutes = TestRoutes;
