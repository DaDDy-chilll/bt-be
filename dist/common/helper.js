"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.helper = {
    generateToken: async (payload, expiresIn = 10000) => {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || "", {
            expiresIn: expiresIn,
        });
    },
    verifyToken: async (token) => {
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "");
    },
    hashPassword: async (password) => {
        return bcrypt_1.default.hash(password, 10);
    },
    verifyPassword: async (password, hashedPassword) => {
        return bcrypt_1.default.compare(password, hashedPassword);
    },
    logoutToken: async (payload) => {
        const logoutToken = await exports.helper.generateToken(payload, 0);
        return logoutToken;
    },
    serialize: async (data) => {
        console.log("here2");
        console.log(JSON.stringify(data));
        const serialized = JSON.parse(JSON.stringify(data));
        console.log("here3");
        console.log(serialized);
        const convertBigIntToNumber = (obj) => {
            if (Array.isArray(obj)) {
                return obj.map((item) => convertBigIntToNumber(item));
            }
            if (typeof obj === "object" && obj !== null) {
                const converted = {};
                for (const key in obj) {
                    if (typeof obj[key] === "bigint") {
                        converted[key] = Number(obj[key]);
                    }
                    else if (typeof obj[key] === "object") {
                        converted[key] = convertBigIntToNumber(obj[key]);
                    }
                    else {
                        converted[key] = obj[key];
                    }
                }
                return converted;
            }
            return obj;
        };
        return convertBigIntToNumber(serialized);
    },
};
