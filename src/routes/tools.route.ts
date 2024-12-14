import { Router } from "express";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";
const router = Router();
import * as ToolsController from "../controller/tools.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, ToolsController.getAllTools);

router.post(
  "/",
  AuthGuard,
  // validateBody(schema.tools.create),
  ToolsController.createTool
);

router.put(
  "/:id",
  AuthGuard,
  // validateBody(schema.tools.update),
  ToolsController.updateTool
);

export default router;
