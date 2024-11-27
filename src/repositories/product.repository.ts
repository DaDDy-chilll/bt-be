import { PrismaClient, m_products } from "@prisma/client";
import { ProductInstance } from "../instances/product/create.instance";
import { helper } from "../common/helper";
import Product from "../models/product.class";

export class ProductRepository {
  private prisma = new PrismaClient();

  async createWithGems(data: ProductInstance): Promise<m_products> {
    return await this.prisma.$transaction(async (tx) => {
      const product = await tx.m_products.create({
        data: {
          code: data.code,
          name: data.name,
          category_id: data.category_id,
          type_id: data.type_id,
          length: data.length,
          length_unit_id: data.length_unit_id,
          weight: data.weight,
          weight_unit_id: data.weight_unit_id,
          size: data.size,
          size_unit_id: data.size_unit_id,
          total_weight: data.total_weight,
          total_weight_unit_id: data.total_weight_unit_id,
          gold_types_id: data.gold_types_id,
          gold_color_id: data.gold_color_id,
          gems_price: data.gems_price,
          ayoutwat: data.ayoutwat,
          latt_kha: data.latt_kha,
          created_by: data.created_by,
        },
      });
      for (const gem of data.m_product_gems) {
        await tx.m_product_gems.create({
          data: {
            ...gem,
            product_id: product.id,
            del_flg: 0,
          },
        });
      }

      return product;
    });
  }

  async update(data: ProductInstance, id: bigint): Promise<void> {
    return await this.prisma.$transaction(async (tx) => {
      await tx.m_products.update({
        where: { id },
        data: {
          code: data.code,
          name: data.name,
          category_id: data.category_id,
          type_id: data.type_id,
          length: data.length,
          length_unit_id: data.length_unit_id,
          weight: data.weight,
          weight_unit_id: data.weight_unit_id,
          size: data.size,
          size_unit_id: data.size_unit_id,
          total_weight: data.total_weight,
          total_weight_unit_id: data.total_weight_unit_id,
          gold_types_id: data.gold_types_id,
          gold_color_id: data.gold_color_id,
          gems_price: data.gems_price,
          ayoutwat: data.ayoutwat,
          latt_kha: data.latt_kha,
          created_by: data.created_by,
        },
      });
      for (const gem of data.m_product_gems) {
        const product_with_gems = await tx.m_products.findFirst({
          where: {
            id,
          },
          include: {
            m_product_gems: true,
          },
        });
        if (
          product_with_gems?.m_product_gems.length &&
          product_with_gems.m_product_gems.length > 0
        ) {
          await tx.m_product_gems.deleteMany({
            where: { product_id: id },
          });
          await tx.m_product_gems.create({
            data: {
              ...gem,
              product_id: id,
              del_flg: 0,
            },
          });
        }
      }
    });
  }

  async delete(id: bigint): Promise<void> {
    await this.prisma.m_products.delete({
      where: { id },
    });
  }

  async getAll(page: number, limit: number){
    const products = await this.prisma.m_products.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: { del_flg: 0 },
      include: {
        m_product_gems: true,
      },
    });

    const castedProducts = products.map((product) => ({
      ...product,
      id: Number(product.id),
      category_id: Number(product.category_id),
      type_id: Number(product.type_id),
      length_unit_id: Number(product.length_unit_id),
      weight_unit_id: Number(product.weight_unit_id),
      size_unit_id: Number(product.size_unit_id),
      total_weight_unit_id: Number(product.total_weight_unit_id),
      gold_types_id: Number(product.gold_types_id),
      gold_color_id: Number(product.gold_color_id),
      created_by: Number(product.created_by),
      m_product_gems: product.m_product_gems.map((gem) => ({
        ...gem,
        id: Number(gem.id),
        product_id: Number(gem.product_id),
        color_id: Number(gem.color_id),
        weight: Number(gem.weight),
        weight_unit_id: Number(gem.weight_unit_id),
      })),
    }));

    return castedProducts;
  }

  async getAllProductCount(): Promise<number> {
    return await this.prisma.m_products.count({ where: { del_flg: 0 } });
  }
}
