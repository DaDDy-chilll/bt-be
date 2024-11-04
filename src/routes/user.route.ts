import { Router } from "express";
import * as UserController from "../controller/user.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

const router = Router();

router.get("/all", UserController.getAllUsers);

export default router;
