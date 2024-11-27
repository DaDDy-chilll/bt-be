import { Router } from "express";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";
const router = Router();
import * as ProductController from "../controller/product.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.post(
  "/",
  AuthGuard,
  validateBody(schema.product.create),
  ProductController.createProduct
);

router.put(
  "/:id",
  AuthGuard,
  validateBody(schema.product.create),
  ProductController.updateProduct
);


router.get("/", AuthGuard, ProductController.getAllProducts);

export default router;
