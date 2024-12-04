import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";
import User from "../models/user.class";
import { response } from "../common/response";
import { helper } from "../common/helper";
import { MailService } from "../services/mail.service";
// Initialize services
const user_service = new UserService();
const auth_service = new AuthService();
const mail_service = new MailService();
// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user: User | null = await user_service.getUserByEmail(email);
    if (!user) {
      return response.fail(res, 404, "User not found");
    }
    const isPasswordValid = await helper.verifyPassword(
      password,
      user.getPassword() || ""
    );
    if (!isPasswordValid) {
      return response.fail(res, 400, "Wrong Password");
    }
    const token = await auth_service.token(user);

    return response.success(res, 200, "Success", {
      username: user.getName(),
      token,
    });
  } catch (error: any) {
    return response.internal(res, 500, error.name, error.message);
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  try {
    const foundUser: User | null = await user_service.getUserByEmail(email);
    if (foundUser) {
      return response.fail(res, 400, "Email already exists");
    }

    const user = await user_service.createUser(req.body);

    return response.success(res, 200, "Success", user);
  } catch (error: any) {
    return response.internal(res, 500, error.name, error.message);
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
    return response.internal(res, 500, error.name, error.message);
  }
};

export const logout = async (req: Request, res: Response): Promise<any> => {
  const { token } = req;
  try {
    const logout_token = await auth_service.logout(token!);
    return response.success(res, 200, "Logout Success", { logout_token });
  } catch (error: any) {
    return response.internal(res, 500, error.name, error.message);
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { email } = req.body;
  try {
    const user = await user_service.getUserByEmail(email);
    if (!user) {
      return response.fail(res, 404, "User not found");
    }
    const otp = helper.generateOTP();
    const hashedOtp = await helper.hashPassword(otp);

    //set otp code to user
    await user_service.updateOtpCode(user.getId()!, hashedOtp);

    //send email
    await mail_service.sendForgotPasswordEmail(email, otp);
    return response.success(res, 200, "Otp was sent to your email");
  } catch (error: any) {
    return response.internal(res, 500, error.name, error.message);
  }
};

export const verifyOtp = async (req: Request, res: Response): Promise<any> => {
  const { email, otp } = req.body;

  const user = await user_service.getUserByEmail(email);
  if (!user) {
    return response.fail(res, 404, "User not found");
  }
  // console.log(user.otp_code);
  const isOtpValid = await helper.verifyPassword(otp, user.getOtpCode() || "");
  if (!isOtpValid) {
    return response.fail(res, 400, "Invalid OTP");
  }
  const resetPasswordToken = await helper.generateResetPasswordToken({
    id: user.getId()!,
    name: user.getName()!,
  });
  return response.success(res, 200, "Otp is valid", { resetPasswordToken });
};

export const resetPassword = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { password } = req.body;

  const hashedPassword = await helper.hashPassword(password);
  await user_service.updatePassword(req.user.id, hashedPassword);
  return response.success(res, 200, "Password reset successfully");
};
