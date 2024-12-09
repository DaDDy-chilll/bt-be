import { PrismaClient } from "@prisma/client";
import TodayGoldPrice from "../models/today_gold_price.class";

export class TodayGoldPriceRepository {
  private prisma = new PrismaClient();

  async getTodayGoldPrice(gold_type_id: number): Promise<any> {
    const where = gold_type_id ? { gold_types_id: gold_type_id } : {};
    const today_gold_price = await this.prisma.m_today_gold_prices.findMany({
      where,
      orderBy: {
        id: "desc",
      },
      include: {
        m_gold_types: true,
        m_units: true,
      },
    });

    return today_gold_price.map(
      (today_gold_price: any) => new TodayGoldPrice(today_gold_price)
    );
  }
}
