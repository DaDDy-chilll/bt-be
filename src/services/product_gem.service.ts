import { ProductGemRepository } from "../repositories/product_gem.repository";

export class ProductGemService {
  private productGemRepository = new ProductGemRepository();

  async getAllProductGems(page: number, limit: number) {
    return await this.productGemRepository.getAll(page, limit);
  }

  async getAllProductGemCount(): Promise<number> {
    return await this.productGemRepository.getAllCount();
  }
}
