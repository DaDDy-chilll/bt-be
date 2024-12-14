import { log } from "console";
import Tools from "../models/tools.class";
import { TodayGoldPriceRepository } from "../repositories/today_gold_price.repository";

export class TodayGoldPriceService {
  private today_gold_price_repository = new TodayGoldPriceRepository();

  async getTodayGoldPrice(gold_type_id: number) {
    const today_gold_price =
      await this.today_gold_price_repository.getTodayGoldPrice(gold_type_id);

    return today_gold_price;
  }
}
