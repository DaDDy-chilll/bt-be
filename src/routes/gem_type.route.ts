import { Router } from "express";

const router = Router();
import * as GemTypeController from "../controller/gem_type.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get("/", AuthGuard, GemTypeController.getAllGemTypes);

export default router;
