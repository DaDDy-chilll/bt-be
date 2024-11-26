import { Router } from "express";
import * as AuthController from "../controller/auth.controller";
import * as UserController from "../controller/user.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";
const router = Router();

router.post(
  "/login",
  validateBody(schema.auth.login),
  AuthController.login
);
router.post(
  "/register",
  validateBody(schema.auth.register),
  AuthController.register
);
router.get("/refresh-token", AuthGuard, AuthController.refreshToken);
router.get("/logout", AuthGuard, AuthController.logout);
router.get("/who-am-i", AuthGuard, UserController.getUserById);
export default router;
