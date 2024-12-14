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
  constructor(data: Product) {
    this.code = data.code;
    this.category_id = data.category_id;
    this.type_id = data.type_id;
    this.name = data.name;
    this.length = data.length;
    this.length_unit_id = data.length_unit_id;
    this.weight = data.weight;
    this.weight_unit_id = data.weight_unit_id;
    this.size = data.size;
    this.size_unit_id = data.size_unit_id;
    this.total_weight = data.total_weight;
    this.total_weight_unit_id = data.total_weight_unit_id;
    this.gold_types_id = data.gold_types_id;
    this.gold_color_id = data.gold_color_id;
    this.gems_price = data.gems_price;
    this.ayoutwat = data.ayoutwat;
    this.latt_kha = data.latt_kha;
    this.created_by = data.created_by;
    this.created_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
    this.updated_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
    this.del_flg = false;
    this.m_product_gems = data.m_product_gems;
    this.m_photos = data.m_photos;
  }
}

export default Product;
