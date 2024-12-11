import { PrismaClient, m_product_types } from "@prisma/client";

export class OrderRepository {
  private prisma = new PrismaClient();

  async createOrder(order: any) {

    return await this.prisma.t_orders.create({
      data: {
        order_no: order.order_no,
        order_type: order.order_type,
        order_category_id: order.order_category_id,
        order_avaliable: order.order_available,
        order_date: order.order_date,
        factory_ready_date: order.factory_ready_date,
        shipping_date: order.shipping_date,
        delivery_day: order.delivery_day,
        sales_person: order.sales_person,
        gold_calculate_method: order.gold_calculate_method,
        today_gold_price: order.today_gold_price,
        customer_id: order.customer_id,
        tax_id: order.tax_id,
        status: order.status,
      },
    });
  }
}
