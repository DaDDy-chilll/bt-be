import {Router} from "express";
import * as WarehouseController from "../controller/warehouse.controller";
const router = Router();

router.get("/all", WarehouseController.getAllWarehouse);
router.get("/types", WarehouseController.getAllWarehouseType);
router.post("/create", WarehouseController.createWarehouse);

export default router;


