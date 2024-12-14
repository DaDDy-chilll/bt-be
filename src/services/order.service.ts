import { OrderRepository } from "../repositories/order.repository";
import Order from "../models/order.class";
export class OrderService {
  private orderRepository = new OrderRepository();

  async createOrder(order: Order) {
    const orderNo = await this.generateOrderNo();
    order.order_no = orderNo;
    return await this.orderRepository.createOrder(order);
  }

  async generateOrderNo() {
    const digitRandom = Math.floor(1000 + Math.random() * 9000);
    const orderNo = `${Date.now()}-${digitRandom}`;
    return orderNo;
  }
}
