import { Router } from "express";
import UserRoute from "./user.route";
import AuthRoute from "./auth.route";
const router = Router();
router.use("/users", UserRoute);
router.use("/auth", AuthRoute);
export default router;
