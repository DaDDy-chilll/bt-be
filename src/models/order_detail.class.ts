// src/models/User.ts

export class OrderDetail {
  id: bigint | number;
  order_id: bigint | number;
  product_id: bigint | number;
  status: bigint | number;
  quantity: number;
  est_price: number;
  ayoutwat: number;
  larkha: number;
  sub_total: number;
  del_flg: number;
  created_at: Date;
  updated_at: Date;

  constructor(data: OrderDetail) {
    this.id = Number(data.id);
    this.order_id = Number(data.order_id);
    this.product_id = Number(data.product_id);
    this.status = Number(data.status);
    this.quantity = Number(data.quantity);
    this.est_price = Number(data.est_price);
    this.ayoutwat = Number(data.ayoutwat);
    this.larkha = Number(data.larkha);
    this.sub_total = Number(data.sub_total);
    this.del_flg = Number(data.del_flg);
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default OrderDetail;
