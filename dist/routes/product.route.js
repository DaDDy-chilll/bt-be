"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vine_validator_1 = require("../Validation/vine.validator");
const vine_validator_2 = require("../Validation/vine.validator");
const router = (0, express_1.Router)();
const ProductController = __importStar(require("../controller/product.controller"));
const auth_guard_1 = require("../AuthGuard/auth.guard");
router.post("/", auth_guard_1.AuthGuard, (0, vine_validator_1.validateBody)(vine_validator_2.schema.product.create), ProductController.createProduct);
router.put("/:id", auth_guard_1.AuthGuard, (0, vine_validator_1.validateBody)(vine_validator_2.schema.product.create), ProductController.updateProduct);
router.get("/", auth_guard_1.AuthGuard, ProductController.getAllProducts);
exports.default = router;