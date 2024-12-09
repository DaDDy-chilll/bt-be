// src/models/User.ts
class Unit {
  public id?: number | undefined;
  public name?: string;
  public symbol?: string;

  constructor(unit: Unit) {
    this.id = Number(unit.id);
    this.name = unit.name;
    this.symbol = unit.symbol;
  }
}
class GoldTypes {
  public id?: number | undefined;
  public name?: string;

  constructor(gold_types: GoldTypes) {
    this.id = Number(gold_types.id);
    this.name = gold_types.name;
  }
}
class TodayGoldPrice {
  public id?: number | undefined;
  public unit_id: number;
  public gold_types_id: number;
  public gold_weight: string;
  public other_price?: number;
  public pyinpa_price?: number;
  public ygea_price?: number;
  public default: number;
  public created_at?: string;
  public updated_at?: string;
  public del_flg?: boolean;

  public m_units?: Unit;
  public m_gold_types?: GoldTypes;

  constructor(today_gold_price: TodayGoldPrice) {
    this.id = Number(today_gold_price.id);
    this.unit_id = Number(today_gold_price.unit_id);
    this.gold_types_id = Number(today_gold_price.gold_types_id);
    this.gold_weight = today_gold_price.gold_weight;
    this.other_price = today_gold_price.other_price;
    this.pyinpa_price = today_gold_price.pyinpa_price;
    this.ygea_price = today_gold_price.ygea_price;
    this.default = today_gold_price.default;
    this.created_at = today_gold_price.created_at
      ? new Date(today_gold_price.created_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.updated_at = today_gold_price.updated_at
      ? new Date(today_gold_price.updated_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.del_flg = today_gold_price.del_flg;
    this.m_units = today_gold_price.m_units
      ? new Unit(today_gold_price.m_units)
      : undefined;
    this.m_gold_types = today_gold_price.m_gold_types
      ? new GoldTypes(today_gold_price.m_gold_types)
      : undefined;
  }
  getTodayGoldPrice(): TodayGoldPrice {
    this.id = Number(this.id);
    this.unit_id = Number(this.unit_id);
    this.gold_types_id = Number(this.gold_types_id);

    return this;
  }
}

export default TodayGoldPrice;
