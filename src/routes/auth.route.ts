import { Router } from "express";
import * as AuthController from "../controller/auth.controller";
import * as UserController from "../controller/user.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";
const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/refresh-token", AuthGuard, AuthController.refreshToken);
router.get("/logout", AuthGuard, AuthController.logout);
router.get("/me", AuthGuard, UserController.getUserById);
export default router;
