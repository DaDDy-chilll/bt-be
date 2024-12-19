import { Router } from "express";
import UserRoute from "./user.route";
import AuthRoute from "./auth.route";
import ProductRoute from "./product.route";
import ProductTypeRoute from "./product_type.route";
import ProductCategoryRoute from "./product_category.route";
import ProductGemRoute from "./product_gem.route";
import GemTypeRoute from "./gem_type.route";
import ColorRoute from "./color.route";
import UnitRoute from "./unit.route";
import GoldTypeRoute from "./gold_type.route";
import MasterSettingRoute from "./master_setting.route";
import FileUploadRoute from "./file_upload.route";
import ToolsRoute from "./tools.route";
import TodayGoldPriceRoute from "./today_gold_price.route";
import OrderRoute from "./order.route";
import SupplierRoute from "./supplier.route";
import CustomerRoute from "./customer.route";
const router = Router();

router.use("/file-uploads", FileUploadRoute);
router.use("/users", UserRoute);
router.use("/auth", AuthRoute);
router.use("/products", ProductRoute);
router.use("/product-types", ProductTypeRoute);
router.use("/product-categories", ProductCategoryRoute);
router.use("/product-gems", ProductGemRoute);
router.use("/gem-types", GemTypeRoute);
router.use("/gold-types", GoldTypeRoute);
router.use("/colors", ColorRoute);
router.use("/units", UnitRoute);
router.use("/master-settings", MasterSettingRoute);
router.use("/tools", ToolsRoute);
router.use("/today-gold-price", TodayGoldPriceRoute);
router.use("/orders", OrderRoute);
router.use("/suppliers", SupplierRoute);
router.use("/customers", CustomerRoute);

export default router;
