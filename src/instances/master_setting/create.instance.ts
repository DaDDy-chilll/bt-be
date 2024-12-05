export interface ITodayGoldPrice {
  gold_types_id: bigint;
  gold_weight: string;
  other_price?: number;
  pyinpa_price?: number;
  ygea_price?: number;
  unit_id: bigint;
  default: number;  
}

export class TodayGoldPriceInstance implements ITodayGoldPrice {
  id?: bigint;
  gold_types_id: bigint;
  gold_weight: string;
  other_price?: number;
  pyinpa_price?: number;
  ygea_price?: number;
  unit_id: bigint;
  default: number;
  del_flg?: number;
  created_at?: Date;
  updated_at?: Date;

  constructor(
    gold_types_id: bigint,
    gold_weight: string,
    unit_id: bigint,
    other_price: number | undefined,
    pyinpa_price: number | undefined,
    ygea_price: number | undefined,
    default_value: number 
  ) {
    this.gold_types_id = gold_types_id;
    this.gold_weight = gold_weight;
    this.unit_id = unit_id;
    this.other_price = other_price;
    this.pyinpa_price = pyinpa_price;
    this.ygea_price = ygea_price;
    this.default = default_value;  
  }
}