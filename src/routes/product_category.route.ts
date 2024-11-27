import { Router } from "express";

const router = Router();
import * as ProductCategoryController from "../controller/product_category.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, ProductCategoryController.getAllProductCategories);

export default router;
