import { PrismaClient } from "@prisma/client";
import OrderCategory from "../models/order_category.class";

export class OrderCategoryRepository {
  private prisma = new PrismaClient();

  async getOrderCategoryById(id: number) {
    const orderCategory = await this.prisma.m_order_categories.findUnique({
      where: {
        id: id,
      },
    });
    return new OrderCategory(orderCategory as OrderCategory);
  }
}
