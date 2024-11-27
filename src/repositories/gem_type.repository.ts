import { PrismaClient, m_product_types } from "@prisma/client";

export class GemTypeRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number) {
    const gemTypes = await this.prisma.m_gem_types.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    //serialize
    const castedGemTypes = gemTypes.map((gemType) => ({
      ...gemType,
      id: Number(gemType.id),
      color_id: Number(gemType.color_id),
      weight_unit_id: Number(gemType.weight_unit_id),
    }));

    return castedGemTypes;
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_gem_types.count();
  }
}
