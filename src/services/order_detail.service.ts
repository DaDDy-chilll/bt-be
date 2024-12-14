import OrderDetail from "../models/order_detail.class";
import { OrderDetailRepository } from "../repositories/order_detail.repository";

export class OrderDetailService {
  private orderDetailRepository = new OrderDetailRepository();

  async createOrderDetail(orderDetail: OrderDetail) {
    return await this.orderDetailRepository.createOrderDetail(orderDetail);
  }
}
