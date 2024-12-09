import { Request, Response } from "express";
import { TodayGoldPriceService } from "../services/today_gold_price.service";
// import TodayGoldPrice from "../models/today_gold_price.class";

const today_gold_price_service = new TodayGoldPriceService();

export const getTodayGoldPrice = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const gold_type_id = Number(req.query.gold_type_id);
    console.log(gold_type_id);
    const today_gold_price = await today_gold_price_service.getTodayGoldPrice(
      gold_type_id
    );

    return res.status(200).json({
      success: true,
      message: "Today gold price fetched successfully",
      data: today_gold_price,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error fetching today gold price",
      error: error,
    });
  }
};
