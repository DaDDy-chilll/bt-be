import { PrismaClient } from "@prisma/client";

export class ColorRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number) {
    const colors = await this.prisma.m_colors.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    //serialize
    const castedColors = colors.map((color) => ({
      ...color,
      id: Number(color.id),
    }));

    return castedColors;
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_colors.count();
  }
}
