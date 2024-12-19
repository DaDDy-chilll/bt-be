// src/models/User.ts

export class ProductType {
  id: bigint | number;
  type: string;
  del_flg: number;
  created_at: Date;
  updated_at: Date;

  constructor(data: ProductType) {
    this.id = Number(data.id);
    this.type = data.type;
    this.del_flg = Number(data.del_flg);
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default ProductType;
