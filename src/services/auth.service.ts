import { helper } from "../common/helper";
import { TokenPayload } from "../instances/auth/token_payload.instance";
import User from "../models/user.class";
import { response } from "../common/response";
export class AuthService {
  async token(user: User): Promise<string> {
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
