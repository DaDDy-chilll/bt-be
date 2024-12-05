"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const user_service_1 = require("../services/user.service");
const response_1 = require("../common/response");
const user_service = new user_service_1.UserService();
const getAllUsers = async (req, res) => {
    try {
        const users = await user_service.getUsers();
        return res.status(200).json({
            success: true,
            data: users,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching users",
            error: error,
        });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await user_service.getUserById(+id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        user.deletePassword();
        response_1.response.success(res, 200, "User fetched successfully", user);
    }
    catch (error) {
        response_1.response.internal(res, 500, "Error fetching user", error);
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        // const { name, email, password } = req.body;
        // const user = await prisma.user.create({
        //   data: {
        //     name,
        //     email,
        //     password,
        //   },
        // });
        // return res.status(201).json({
        //   success: true,
        //   data: user,
        // });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error,
        });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        // const { id } = req.params;
        // const { name, email, password } = req.body;
        // const user = await prisma.user.update({
        //   where: {
        //     id: parseInt(id),
        //   },
        //   data: {
        //     name,
        //     email,
        //     password,
        //   },
        // });
        // return res.status(200).json({
        //   success: true,
        //   data: user,
        // });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error,
        });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        // const { id } = req.params;
        // await prisma.user.delete({
        //   where: {
        //     id: parseInt(id),
        //   },
        // });
        // return res.status(200).json({
        //   success: true,
        //   message: "User deleted successfully",
        // });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error,
        });
    }
};
exports.deleteUser = deleteUser;
