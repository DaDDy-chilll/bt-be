import { helper } from "../common/helper";
import { TokenPayload } from "../instances/auth/token_payload.instance";
import User from "../models/user.class";

export class AuthService {
  async login(user: User, password: string): Promise<string> {
    const isPasswordValid = await helper.verifyPassword(
      password,
      user.getPassword() || ""
    );
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    return helper.generateToken({
      id: user.getId(),
      name: user.getName(),
    });
  }

  async refreshToken(token: string): Promise<string> {
    const decoded: TokenPayload = await helper.verifyToken(token);
    return helper.generateToken({
      id: decoded.id,
      name: decoded.name,
    });
  }

  async logout(token: string): Promise<string> {
    const decoded: TokenPayload = await helper.verifyToken(token);
    return helper.logoutToken({
      id: decoded.id,
      name: decoded.name,
    });
  }
}
