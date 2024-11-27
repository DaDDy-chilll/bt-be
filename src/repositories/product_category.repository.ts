import { PrismaClient, m_product_types } from "@prisma/client";

export class ProductCategoryRepository {
  private prisma = new PrismaClient();

  async getAll(page: number, limit: number) {
    const productCategories = await this.prisma.m_product_categories.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    //serialize
    const castedProductCategories = productCategories.map(
      (productCategory) => ({
        ...productCategory,
        id: Number(productCategory.id),
      })
    );

    return castedProductCategories;
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_product_categories.count();
  }
}
