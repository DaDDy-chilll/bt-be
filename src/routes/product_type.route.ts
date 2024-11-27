import { Router } from "express";

const router = Router();
import * as ProductTypeController from "../controller/product_type.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, ProductTypeController.getAllProductTypes);

export default router;
