"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = exports.register = exports.login = void 0;
const user_service_1 = require("../services/user.service");
const auth_service_1 = require("../services/auth.service");
const response_1 = require("../common/response");
const helper_1 = require("../common/helper");
// Initialize user service
const user_service = new user_service_1.UserService();
const auth_service = new auth_service_1.AuthService();
// Login controller
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await user_service.getUserByEmail(email);
        if (!user) {
            return response_1.response.fail(res, 404, "User not found");
        }
        const isPasswordValid = await helper_1.helper.verifyPassword(password, user.getPassword() || "");
        if (!isPasswordValid) {
            return response_1.response.fail(res, 400, "Wrong Password");
        }
        const token = await auth_service.token(user);
        return response_1.response.success(res, 200, "Success", {
            username: user.getName(),
            token,
        });
    }
    catch (error) {
        return response_1.response.internal(res, 500, error.name, error.message);
    }
};
exports.login = login;
const register = async (req, res) => {
    const { email } = req.body;
    try {
        const foundUser = await user_service.getUserByEmail(email);
        if (foundUser) {
            return response_1.response.fail(res, 400, "Email already exists");
        }
        const user = await user_service.createUser(req.body);
        return response_1.response.success(res, 200, "Success", user);
    }
    catch (error) {
        return response_1.response.internal(res, 500, error.name, error.message);
    }
};
exports.register = register;
const refreshToken = async (req, res) => {
    const { token } = req;
    try {
        const newToken = await auth_service.refreshToken(token);
        return response_1.response.success(res, 200, "Success", { token: newToken });
    }
    catch (error) {
        return response_1.response.internal(res, 500, error.name, error.message);
    }
};
exports.refreshToken = refreshToken;
const logout = async (req, res) => {
    const { token } = req;
    try {
        const logout_token = await auth_service.logout(token);
        return response_1.response.success(res, 200, "Logout Success", { logout_token });
    }
    catch (error) {
        return response_1.response.internal(res, 500, error.name, error.message);
    }
};
exports.logout = logout;
