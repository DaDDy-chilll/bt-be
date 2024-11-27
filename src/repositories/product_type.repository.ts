import { PrismaClient, m_product_types } from "@prisma/client";

export class ProductTypeRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number){
    const productTypes = await this.prisma.m_product_types.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    //serialize
    const castedProductTypes = productTypes.map((productType) => ({
      ...productType,
      id: Number(productType.id),
    }));

    return castedProductTypes;
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_product_types.count();
  }
}
