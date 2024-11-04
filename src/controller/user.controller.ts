import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { response } from "../common/response";
const user_service = new UserService();

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const users = await user_service.getUsers();
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error,
    });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
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
    response.success(res, 200, "User fetched successfully", user);
  } catch (error) {
    response.internal(res, 500, "Error fetching user", error);
  }
};

export const createUser = async (req: Request, res: Response) => {
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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating user",
      error: error,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting user",
      error: error,
    });
  }
};
