import { Router } from "express";

const router = Router();
import * as ProductGemController from "../controller/product_gem.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, ProductGemController.getAllProductGems);

export default router;
