"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = exports.UserClass = void 0;
const client_1 = require("@prisma/client");
const user_class_1 = __importDefault(require("../models/user.class"));
const UserClass = (user) => {
    const { id, email, password } = user;
    return new user_class_1.default(Number(id), email, password);
};
exports.UserClass = UserClass;
class UserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll() {
        const users = await this.prisma.m_users.findMany();
        return users.map(exports.UserClass);
    }
    async findById(id) {
        const user = await this.prisma.m_users.findUnique({ where: { id } });
        if (!user)
            return null;
        return (0, exports.UserClass)(user);
    }
    async findByEmail(email) {
        const user = await this.prisma.m_users.findFirst({
            where: { email: email },
        });
        if (!user)
            return null;
        return (0, exports.UserClass)(user);
    }
    async create(data) {
        const user = await this.prisma.m_users.create({
            data: { email: data.email, password: data.password },
        });
        return (0, exports.UserClass)(user);
    }
}
exports.UserRepository = UserRepository;
