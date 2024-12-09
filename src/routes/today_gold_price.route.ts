import { Router } from "express";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";
const router = Router();
import * as TodayGoldPriceController from "../controller/today_gold_price.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, TodayGoldPriceController.getTodayGoldPrice);

export default router;
