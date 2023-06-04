"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
class TestRoutes {
    route(app) {
        app.get('/api/test', (req, res) => {
            res.status(200).json({ message: 'Get request successfully' });
        });
        app.post('/api/test', (req, res) => {
            res.status(200).json({ message: 'Post request successfully' });
        });
    }
}
exports.TestRoutes = TestRoutes;
