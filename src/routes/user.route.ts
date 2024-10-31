import { Router } from "express";
import * as UserController from "../controller/user.controller";

const router = Router();

router.get("/all", UserController.getAllUsers);
export default router;
