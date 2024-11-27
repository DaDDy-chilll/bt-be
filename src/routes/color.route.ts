import { Router } from "express";

const router = Router();
import * as ColorController from "../controller/color.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, ColorController.getAllColors);

export default router;
