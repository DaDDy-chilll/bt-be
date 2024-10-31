import { PrismaClient, m_users } from "@prisma/client";

export class UserRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<m_users[]> {
    return this.prisma.m_users.findMany();
  }

//   async findById(id: number): Promise<m_users | null> {
//     return this.prisma.m_users.findUnique({ where: { id } });
//   }

//   async create(data: Partial<m_users>): Promise<m_users> {
//     return this.prisma.m_users.create({ data });
//   }

//   async update(id: number, data: Partial<m_users>): Promise<m_users> {
//     return this.prisma.m_users.update({ where: { id }, data });
//   }

//   async delete(id: number): Promise<m_users> {
//     return this.prisma.m_users.delete({ where: { id } });
//   }
}
