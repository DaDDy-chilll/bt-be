import { PrismaClient } from "@prisma/client";
import OrderDetail from "../models/order_detail.class";

export class OrderDetailRepository {
  private prisma = new PrismaClient();

  async createOrderDetail(orderDetail: OrderDetail) {
    await this.prisma.t_order_details.create({
      data: {
        order_id: orderDetail.order_id,
        product_id: orderDetail.product_id,
        status: orderDetail.status,
        quantity: orderDetail.quantity,
        est_price: orderDetail.est_price,
        ayoutwat: orderDetail.ayoutwat,
        larkha: orderDetail.larkha,
        sub_total: orderDetail.sub_total,
      },
    });
  }
}
