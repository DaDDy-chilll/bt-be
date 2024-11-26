import { PrismaClient, m_users } from "@prisma/client";
import User from "../models/user.class";
import { CreateUserInstance } from "../instances/user/create.instance";

export const UserClass = (user: m_users): User => {
  const { id, email, password } = user;
  return new User(Number(id), email, password);
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

  //   async update(id: number, data: Partial<m_users>): Promise<m_users> {
  //     return this.prisma.m_users.update({ where: { id }, data });
  //   }

  //   async delete(id: number): Promise<m_users> {
  //     return this.prisma.m_users.delete({ where: { id } });
  //   }
}
