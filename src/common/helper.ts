import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  TokenPayload,
  TokenPayloadInstance,
} from "../instances/auth/token_payload.instance";

export const helper = {
  generateToken: async (
    payload: TokenPayload,
    expiresIn: string | number = 10000
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
  serialize: async (data: any[]): Promise<any> => {
    console.log("here2");
    console.log(JSON.stringify(data));

    const serialized = JSON.parse(JSON.stringify(data));
    console.log("here3");
    console.log(serialized);
    const convertBigIntToNumber = (obj: any): any => {
      if (Array.isArray(obj)) {
        return obj.map((item) => convertBigIntToNumber(item));
      }

      if (typeof obj === "object" && obj !== null) {
        const converted: any = {};
        for (const key in obj) {
          if (typeof obj[key] === "bigint") {
            converted[key] = Number(obj[key]);
          } else if (typeof obj[key] === "object") {
            converted[key] = convertBigIntToNumber(obj[key]);
          } else {
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
