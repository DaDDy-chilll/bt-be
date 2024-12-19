import { Router } from "express";
import * as customer_controller from "../controller/customer.controller";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";
import { AuthGuard } from "../AuthGuard/auth.guard";
const router = Router();

router.post("/", AuthGuard, validateBody(schema.customer.createCustomer), customer_controller.createCustomer);
router.put("/:id", AuthGuard, validateBody(schema.customer.createCustomer), customer_controller.updateCustomer);
router.delete("/:id", AuthGuard, customer_controller.deleteCustomer);
router.get("/", AuthGuard, customer_controller.getAllCustomers);
router.get("/:id", AuthGuard, customer_controller.getCustomerById);

export default router;
