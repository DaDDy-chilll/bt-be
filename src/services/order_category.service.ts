import { OrderCategoryRepository } from "../repositories/order_category.repository";

export class OrderCategoryService {
  private orderCategoryRepository = new OrderCategoryRepository();

  async getOrderCategoryById(id: number) {
    return await this.orderCategoryRepository.getOrderCategoryById(id);
  }
}
