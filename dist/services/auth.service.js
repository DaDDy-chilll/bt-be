"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const helper_1 = require("../common/helper");
class AuthService {
    async token(user) {
        return helper_1.helper.generateToken({
            id: user.getId(),
            name: user.getName(),
        });
    }
    async refreshToken(token) {
        const decoded = await helper_1.helper.verifyToken(token);
        return helper_1.helper.generateToken({
            id: decoded.id,
            name: decoded.name,
        });
    }
    async logout(token) {
        const decoded = await helper_1.helper.verifyToken(token);
        return helper_1.helper.logoutToken({
            id: decoded.id,
            name: decoded.name,
        });
    }
}
exports.AuthService = AuthService;
