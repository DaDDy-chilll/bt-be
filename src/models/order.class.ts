// src/models/User.ts

export class Order {
  id: bigint | number;
  order_no: string;
  order_type: number;
  order_category_id: bigint | number;
  order_available: number;
  order_date: Date;
  factory_ready_date: Date;
  shipping_date: Date;
  delivery_day: number;
  sales_person: bigint | number;
  gold_calculate_method: bigint | number;
  today_gold_price: bigint | number;
  customer_id: bigint | number;
  tax_id: bigint | number;
  status: bigint | number;
  del_flg: number;
  created_at: Date;
  updated_at: Date;


  constructor(data: Order) {
    this.id = Number(data.id);
    this.order_no = data.order_no;
    this.order_type = data.order_type;
    this.order_category_id = Number(data.order_category_id);
    this.order_available = data.order_available;
    this.order_date = new Date(data.order_date);
    this.factory_ready_date = new Date(data.factory_ready_date);
    this.shipping_date = new Date(data.shipping_date);
    this.delivery_day = data.delivery_day;
    this.sales_person = Number(data.sales_person);
    this.gold_calculate_method = Number(data.gold_calculate_method);
    this.today_gold_price = Number(data.today_gold_price);
    this.customer_id = Number(data.customer_id);
    this.tax_id = Number(data.tax_id);
    this.status = Number(data.status);
    this.del_flg = data.del_flg;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default Order;
