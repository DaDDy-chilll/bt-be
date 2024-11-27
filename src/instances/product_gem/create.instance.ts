export class ProductGemInstance {
  id?: bigint;
  name: string;
  product_id: bigint;
  color_id: bigint;
  pieces: number;
  weight: number;
  weight_unit_id: bigint;
  icon: string;
  created_at?: Date;
  updated_at?: Date;
  del_flg?: boolean;

  constructor(
    id: bigint,
    name: string,
    product_id: bigint,
    color_id: bigint,
    pieces: number,
    weight: number,
    weight_unit_id: bigint,
    icon: string
  ) {
    this.id = id;
    this.name = name;
    this.product_id = product_id;
    this.color_id = color_id;
    this.pieces = pieces;
    this.weight = weight;
    this.weight_unit_id = weight_unit_id;
    this.icon = icon;
  }
}
