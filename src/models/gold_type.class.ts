class GoldType {
  public id?: number | undefined;
  public name?: string;
  public del_flg?: boolean;
  public created_at?: string;
  public updated_at?: string;

  constructor(gold_type: GoldType) {
    this.id = Number(gold_type.id);
    this.name = gold_type.name;
    this.del_flg = gold_type.del_flg;
    this.created_at = gold_type.created_at
      ? new Date(gold_type.created_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.updated_at = gold_type.updated_at
      ? new Date(gold_type.updated_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
  }
}

export default GoldType;
