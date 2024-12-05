import { PrismaClient, m_users } from "@prisma/client";
import User from "../models/user.class";
import { CreateUserInstance } from "../instances/user/create.instance";
import { UpdateUserInstance } from "../instances/user/update.instance";

export const UserClass = (user: m_users): User => {
  const { id, email, password, otp_code } = user;
  return new User(Number(id), email, password, otp_code || undefined);
};
export class UserRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<User[]> {
    const users = await this.prisma.m_users.findMany();
    return users.map(UserClass);
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.prisma.m_users.findUnique({ where: { id } });
    if (!user) return null;
    return UserClass(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.m_users.findFirst({
      where: { email: email },
    });
    if (!user) return null;
    return UserClass(user);
  }

  async create(data: CreateUserInstance): Promise<User> {
    const user = await this.prisma.m_users.create({
      data: { email: data.email, password: data.password },
    });
    return UserClass(user);
  }

  async updateOtpCode(id: number, otp_code: string): Promise<User> {
    const user = await this.prisma.m_users.update({
      where: { id: BigInt(id) },
      data: { otp_code: otp_code },
    });
    return UserClass(user);
  }

  async updatePassword(id: number, password: string): Promise<User> {
    const user = await this.prisma.m_users.update({
      where: { id: BigInt(id) },
      data: { password: password },
    });
    return UserClass(user);
  }
}
