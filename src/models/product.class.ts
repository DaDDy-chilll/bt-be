import { PhotoInstance } from "../instances/photo/create.instance";
import { ProductGemInstance } from "../instances/product_gem/create.instance";

class Product {
  public id?: bigint;
  public code: string;
  public category_id: bigint;
  public type_id: bigint;
  public name: string;
  public length?: number;
  public length_unit_id?: bigint;
  public weight?: number;
  public weight_unit_id?: bigint;
  public size?: number;
  public size_unit_id?: bigint;
  public total_weight?: number;
  public total_weight_unit_id: bigint;
  public gold_types_id: bigint;
  public gold_color_id: bigint;
  public gems_price: number;
  public ayoutwat: number;
  public latt_kha: number;
  public created_by: bigint;
  public del_flg: boolean;
  public created_at: string;
  public updated_at: string;

  public m_product_gems?: ProductGemInstance[];
  public m_photos?: PhotoInstance[];
  constructor(
    code: string,
    category_id: bigint,
    type_id: bigint,
    name: string,
    length: number,
    length_unit_id: bigint,
    weight: number,
    weight_unit_id: bigint,
    size: number,
    size_unit_id: bigint,
    total_weight: number,
    total_weight_unit_id: bigint,
    gold_types_id: bigint,
    gold_color_id: bigint,
    gems_price: number,
    ayoutwat: number,
    latt_kha: number,
    created_by: bigint,
    m_product_gems: ProductGemInstance[],
    m_photos: PhotoInstance[]
  ) {
    this.code = code;
    this.category_id = category_id;
    this.type_id = type_id;
    this.name = name;
    this.length = length;
    this.length_unit_id = length_unit_id;
    this.weight = weight;
    this.weight_unit_id = weight_unit_id;
    this.size = size;
    this.size_unit_id = size_unit_id;
    this.total_weight = total_weight;
    this.total_weight_unit_id = total_weight_unit_id;
    this.gold_types_id = gold_types_id;
    this.gold_color_id = gold_color_id;
    this.gems_price = gems_price;
    this.ayoutwat = ayoutwat;
    this.latt_kha = latt_kha;
    this.created_by = created_by;
    this.created_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
    this.updated_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
    this.del_flg = false;
    this.m_product_gems = m_product_gems;
    this.m_photos = m_photos;
  }
}

export default Product;
