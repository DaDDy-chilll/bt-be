"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const helper_1 = require("../common/helper");
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
    }
    async getUsers() {
        return this.userRepository.findAll();
    }
    async getUserById(id) {
        return this.userRepository.findById(+id);
    }
    async getUserByEmail(email) {
        return this.userRepository.findByEmail(email);
    }
    async createUser(data) {
        const hashedPassword = await helper_1.helper.hashPassword(data.password);
        return this.userRepository.create({ ...data, password: hashedPassword });
    }
}
exports.UserService = UserService;
