import { Router } from "express";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";
const router = Router();
import * as OrderController from "../controller/order.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.post(
  "/",
  AuthGuard,
  validateBody(schema.order.create),
  OrderController.createOrder
);

export default router;
