import { ProductRepository } from "../repositories/product.repository";
import Product from "../models/product.class";
import { ProductInstance } from "../instances/product/create.instance";
import { randomInt } from "crypto";
import { ProductTypeRepository } from "../repositories/product_type.repository";
import { m_product_types } from "@prisma/client";

export class ProductTypeService {
  private productTypeRepository = new ProductTypeRepository();

  async getAllProductTypes(page: number, limit: number){
    return await this.productTypeRepository.getAll(page, limit);
  }

  async getAllProductTypeCount(): Promise<number> {
    return await this.productTypeRepository.getAllCount();
  }
}
