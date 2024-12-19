import { Router } from "express";
import { validateBody } from "../Validation/vine.validator";
import { schema } from "../Validation/vine.validator";

const router = Router();
import * as MasterSettingController from "../controller/master_setting.controller";
import { AuthGuard } from "../AuthGuard/auth.guard";

router.get(
  "/today-gold-price",
  AuthGuard,
  MasterSettingController.getAllTodayGoldPrice
);
router.post(
  "/today-gold-price",
  AuthGuard,
  validateBody(schema.masterSetting.createTodayGoldPrice),
  MasterSettingController.createTodayGoldPrice
);
router.put(
  "/today-gold-price/:id",
  AuthGuard,
  validateBody(schema.masterSetting.createTodayGoldPrice),
  MasterSettingController.updateTodayGoldPrice
);
router.delete(
  "/today-gold-price/:id",
  AuthGuard,
  MasterSettingController.deleteTodayGoldPrice
);

// Gem Type
router.post(
  "/gem-type",
  AuthGuard,
  validateBody(schema.masterSetting.createGemType),
  MasterSettingController.createGemType
);
router.get("/gem-type", AuthGuard, MasterSettingController.getAllGemType);
router.put(
  "/gem-type/:id",
  AuthGuard,
  validateBody(schema.masterSetting.createGemType),
  MasterSettingController.updateGemType
);
router.delete(
  "/gem-type/:id",
  AuthGuard,
  MasterSettingController.deleteGemType
);

// Unit
router.post(
  "/unit",
  AuthGuard,
  validateBody(schema.masterSetting.createUnit),
  MasterSettingController.createUnit
);
router.get("/unit", AuthGuard, MasterSettingController.getAllUnit);
router.put(
  "/unit/:id",
  AuthGuard,
  validateBody(schema.masterSetting.createUnit),
  MasterSettingController.updateUnit
);
router.delete("/unit/:id", AuthGuard, MasterSettingController.deleteUnit);

// Gold Type
router.post(
  "/gold-type",
  AuthGuard,
  validateBody(schema.masterSetting.createGoldType),
  MasterSettingController.createGoldType
);
router.get("/gold-type", AuthGuard, MasterSettingController.getAllGoldType);
router.put(
  "/gold-type/:id",
  AuthGuard,
  validateBody(schema.masterSetting.createGoldType),
  MasterSettingController.updateGoldType
);
router.delete(
  "/gold-type/:id",
  AuthGuard,
  MasterSettingController.deleteGoldType
);

//m_colors
router.get("/colors", AuthGuard, MasterSettingController.getAllColor);
router.post(
  "/color",
  AuthGuard,
  validateBody(schema.masterSetting.createColor),
  MasterSettingController.createColor
);

//m_gem_icons
router.get("/gem-icon", AuthGuard, MasterSettingController.getAllGemIcon);
router.post(
  "/gem-icon",
  AuthGuard,
  validateBody(schema.masterSetting.createGemIcon),
  MasterSettingController.createGemIcon
);

//m_states
router.get("/state", AuthGuard, MasterSettingController.getAllState);

//m_cities
router.get("/city/:state_id", AuthGuard, MasterSettingController.getAllCity);

//m_levels
router.get("/level", AuthGuard, MasterSettingController.getAllLevel);

//product type
router.get(
  "/product-type",
  AuthGuard,
  MasterSettingController.getAllProductType
);

//product category
router.get(
  "/product-category",
  AuthGuard,
  MasterSettingController.getAllProductCategory
);

export default router;
