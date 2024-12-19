import { PrismaClient } from "@prisma/client";
import GoldType from "../models/gold_type.class";

export class GoldTypeRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number) {
    const goldTypes = await this.prisma.m_gold_types.findMany({
      where: {
        del_flg: 0,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return goldTypes.map((goldType: any) => new GoldType(goldType));
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_gold_types.count();
  }
}
