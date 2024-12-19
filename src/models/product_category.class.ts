// src/models/User.ts

export class ProductCategory {
  id: bigint | number;
  category: string;
  del_flg: number;
  created_at: Date;
  updated_at: Date;

  constructor(data: ProductCategory) {
    this.id = Number(data.id);
    this.category = data.category;
    this.del_flg = Number(data.del_flg);
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default ProductCategory;
