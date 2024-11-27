import { ProductGemInstance } from "../product_gem/create.instance";

export class ProductInstance {
  id?: bigint;
  code: string;
  category_id: bigint;
  type_id: bigint;
  name: string;

  length: number;
  length_unit_id: bigint;
  weight: number;
  weight_unit_id: bigint;

  gold_types_id: bigint;
  gold_color_id: bigint;

  size: number;
  size_unit_id: bigint;
  total_weight: number;
  total_weight_unit_id: bigint;

  gems_price: number;
  ayoutwat: number;
  latt_kha: number;
  m_product_gems: ProductGemInstance[];

  created_by: bigint;
  created_at?: Date;
  updated_at?: Date;
  del_flg?: boolean;

  constructor(
    code: string,
    name: string,
    category_id: bigint,
    type_id: bigint,
    length: number,
    length_unit_id: bigint,
    weight: number,
    weight_unit_id: bigint,

    gold_types_id: bigint,
    gold_color_id: bigint,

    size: number,
    size_unit_id: bigint,
    total_weight: number,
    total_weight_unit_id: bigint,

    gems_price: number,
    ayoutwat: number,
    latt_kha: number,
    m_product_gems: ProductGemInstance[],
    created_by: bigint
  ) {
    this.code = code;
    this.category_id = category_id;
    this.type_id = type_id;
    this.name = name;
    this.length = length;
    this.length_unit_id = length_unit_id;
    this.weight = weight;
    this.weight_unit_id = weight_unit_id;

    this.gold_types_id = gold_types_id;
    this.gold_color_id = gold_color_id;
    this.size = size;
    this.size_unit_id = size_unit_id;
    this.total_weight = total_weight;
    this.total_weight_unit_id = total_weight_unit_id;

    this.gems_price = gems_price;
    this.ayoutwat = ayoutwat;
    this.latt_kha = latt_kha;
    this.m_product_gems = m_product_gems;
    this.created_by = created_by;
  }
}
