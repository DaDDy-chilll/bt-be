import { ProductRepository } from "../repositories/product.repository";
import Product from "../models/product.class";
import { ProductInstance } from "../instances/product/create.instance";
import { randomInt } from "crypto";
import { ProductGemRepository } from "../repositories/product_gem.repository";
import { m_products } from "@prisma/client";

export class ProductService {
  private productRepository = new ProductRepository();

  async createProduct(data: ProductInstance, id: bigint): Promise<void> {
    data.code = await this.generateProductId();
    data.created_by = id;
    await this.productRepository.createWithGems(data);
  }

  async generateProductId(): Promise<string> {
    //date       generateId
    //20241126 - 0000001
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const generateId = randomInt(1, 999999);
    const productId = `${date} - ${generateId.toString().padStart(7, "0")}`;
    return productId;
  }

  async updateProduct(data: ProductInstance, id: bigint): Promise<void> {
    await this.productRepository.update(data, id);
  }

  async getAllProducts(page: number, limit: number) {
    return await this.productRepository.getAll(page, limit);
  }

  async getAllProductCount(): Promise<number> {
    return await this.productRepository.getAllProductCount();
  }

  async getProductById(id: number) {
    return await this.productRepository.getProductById(id);
  }
}
