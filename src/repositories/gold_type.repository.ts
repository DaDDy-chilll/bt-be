import { PrismaClient } from "@prisma/client";

export class GoldTypeRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number) {
    const goldTypes = await this.prisma.m_gold_types.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    //serialize
    const castedGoldTypes = goldTypes.map((goldType) => ({
      ...goldType,
      id: Number(goldType.id),
    }));

    return castedGoldTypes;
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_gold_types.count();
  }
}
