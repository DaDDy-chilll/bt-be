import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  TokenPayload,
  TokenPayloadInstance,
} from "../instances/auth/token_payload.instance";

export const helper = {
  generateToken: async (
    payload: TokenPayload,
    expiresIn: string | number = 10
  ) => {
    return jwt.sign(payload, process.env.JWT_SECRET || "", {
      expiresIn: expiresIn,
    });
  },
  verifyToken: async (token: string): Promise<TokenPayload> => {
    return jwt.verify(
      token,
      process.env.JWT_SECRET || ""
    ) as TokenPayloadInstance;
  },
  hashPassword: async (password: string) => {
    return bcrypt.hash(password, 10);
  },
  verifyPassword: async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
  },
  logoutToken: async (payload: TokenPayload): Promise<string> => {
    const logoutToken = await helper.generateToken(payload, 0);
    return logoutToken;
  },
};
