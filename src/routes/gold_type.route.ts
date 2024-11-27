import { Router } from "express";

const router = Router();
import * as GoldTypeController from "../controller/gold_type.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, GoldTypeController.getAllGoldTypes);

export default router;
