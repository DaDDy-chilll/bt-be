import { ProductRepository } from "../repositories/product.repository";
import Product from "../models/product.class";
import { ProductInstance } from "../instances/product/create.instance";
import { randomInt } from "crypto";
import { ProductGemRepository } from "../repositories/product_gem.repository";
import { m_products } from "@prisma/client";

export class ProductService {
  private productRepository = new ProductRepository();

  //generate product id
  async generateProductId(): Promise<string> {

    const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); //20241126
    const generateId = randomInt(1, 999999); //0000001
    const productId = `${date} - ${generateId.toString().padStart(7, "0")}`; //20241126 - 0000001
    return productId;
  }

  async createProduct(data: ProductInstance, id: bigint): Promise<void> {
    data.code = await this.generateProductId(); //20241126 - 0000001
    data.created_by = id;
    await this.productRepository.createProductWithGems(data);
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

  async getProductByProductId(product_id: number) {
    return await this.productRepository.getProductByProductId(product_id);
  }
}
