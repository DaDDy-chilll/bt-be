import { Router } from "express";

const router = Router();
import * as UnitController from "../controller/unit.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, UnitController.getAllUnits);

export default router;
