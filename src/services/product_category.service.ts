import { ProductCategoryRepository } from "../repositories/product_category.repository";

export class ProductCategoryService {
  private productCategoryRepository = new ProductCategoryRepository();

  async getAllProductCategories(page: number, limit: number) {
    return await this.productCategoryRepository.getAll(page, limit);
  }

  async getAllProductCategoryCount(): Promise<number> {
    return await this.productCategoryRepository.getAllCount();
  }
}
