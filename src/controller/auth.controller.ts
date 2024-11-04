import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";
import User from "../models/user.class";
import { response } from "../common/response";
// Initialize user service
const user_service = new UserService();
const auth_service = new AuthService();
// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const user: User | null = await user_service.getUserByUsername(username);
    if (!user) {
      return response.fail(res, 404, "User not found");
    }

    const token = await auth_service.login(user, password);

    return response.success(res, 200, "Success", {
      username: user.getName(),
      token,
    });
  } catch (error: any) {
    return response.internal(res, 400, error.name, error.message);
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username } = req.body;
  try {
    const foundUser: User | null = await user_service.getUserByUsername(
      username
    );
    if (foundUser) {
      return response.fail(res, 400, "User name already exists");
    }

    const user = await user_service.createUser(req.body);

    return response.success(res, 200, "Success", user);
  } catch (error: any) {
    return response.internal(res, 400, error.name, error.message);
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { token } = req;
  try {
    const newToken = await auth_service.refreshToken(token!);
    return response.success(res, 200, "Success", { token: newToken });
  } catch (error: any) {
    return response.internal(res, 400, error.name, error.message);
  }
};

export const logout = async (req: Request, res: Response): Promise<any> => {
  const { token } = req;
  try {
    const logout_token = await auth_service.logout(token!);
    return response.success(res, 200, "Logout Success", { logout_token });
  } catch (error: any) {
    return response.internal(res, 400, error.name, error.message);
  }
};
