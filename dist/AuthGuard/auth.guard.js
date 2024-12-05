"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.JWT_SECRET || "";
const AuthGuard = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1] || "";
    if (!token) {
        res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded;
        req.token = token;
        next();
    }
    catch (err) {
        if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
            res.status(401).json({ message: "Token expired." });
        }
        else {
            res.status(400).json({ message: "Invalid token." });
        }
    }
};
exports.AuthGuard = AuthGuard;
