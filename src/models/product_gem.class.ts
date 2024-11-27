class ProductGem {
  public name: string;
  public product_id: bigint;
  public color_id: bigint;
  public pieces: number;
  public weight: number;
  public weight_unit_id: bigint;
  public icon: string;
  public created_by: bigint;
  public del_flg: boolean;
  public created_at: string;
  public updated_at: string;

  constructor(
    name: string,
    product_id: bigint,
    pieces: number,
    color_id: bigint,
    weight: number,
    weight_unit_id: bigint,
    icon: string,
    created_by: bigint,
    updated_at: string
  ) {
    this.name = name;
    this.product_id = product_id;
    this.pieces = pieces;
    this.color_id = color_id;
    this.weight = weight;
    this.weight_unit_id = weight_unit_id;
    this.icon = icon;
    this.created_by = created_by;
    this.created_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
    this.updated_at = updated_at;
    this.del_flg = false;
  }
}

export default ProductGem;
