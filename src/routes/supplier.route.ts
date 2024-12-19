import { Router } from "express";
import * as SupplierController from "../controller/supplier.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";

const router = Router();

router.post(
  "/",
  AuthGuard,
  validateBody(schema.supplier.createSupplier),
  SupplierController.createSupplier
);
router.get("/", AuthGuard, SupplierController.getAllSuppliers);
router.get("/:id", AuthGuard, SupplierController.getSupplierById);
router.put(
  "/:id",
  AuthGuard,
  validateBody(schema.supplier.createSupplier),
  SupplierController.updateSupplier
);
router.delete("/:id", AuthGuard, SupplierController.deleteSupplier);

router.post("/memo", AuthGuard, validateBody(schema.supplier.createMemo), SupplierController.createMemo);

export default router;
