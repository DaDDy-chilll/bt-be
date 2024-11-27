import { PrismaClient, m_product_types } from "@prisma/client";

export class UnitRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number) {
    const units = await this.prisma.m_units.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    //serialize
    const castedUnits = units.map((unit) => ({
      ...unit,
      id: Number(unit.id),
    }));

    return castedUnits;
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_units.count();
  }
}
