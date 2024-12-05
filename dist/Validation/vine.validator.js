"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = exports.schema = void 0;
const response_1 = require("../common/response");
const joi_1 = __importDefault(require("joi"));
exports.schema = {
    auth: {
        login: joi_1.default.object({
            email: joi_1.default.string().email().required().messages({
                "any.required": "Email is required",
                "string.base": "Email must be string",
                "string.email": "Invalid email",
            }),
            password: joi_1.default.string()
                .min(8)
                .max(16)
                .pattern(new RegExp("^(?=.*[A-Z])(?=.*\\d).+$"))
                .required()
                .messages({
                "any.required": "Password is required",
                "string.base": "Password must be string",
                "string.min": "Password must be at least 8 characters",
                "string.max": "Password must be at most 32 characters",
                "string.pattern.base": "Password must contain at least One Uppercase letter and One Number",
            }),
        }),
        register: joi_1.default.object({
            email: joi_1.default.string().email().required().messages({
                "any.required": "Email is required",
                "string.base": "Email must be string",
                "string.email": "Invalid email",
            }),
            password: joi_1.default.string()
                .min(8)
                .max(16)
                .pattern(new RegExp("^(?=.*[A-Z])(?=.*\\d).+$"))
                .required()
                .messages({
                "any.required": "Password is required",
                "string.base": "Password must be string",
                "string.min": "Password must be at least 8 characters",
                "string.max": "Password must be at most 32 characters",
                "string.pattern.base": "Password must contain at least One Uppercase letter and One Number",
            }),
        }),
    },
    product: {
        create: joi_1.default.object({
            category_id: joi_1.default.number().required().messages({
                "any.required": "Category is required",
                "number.base": "Category must be number",
            }),
            type_id: joi_1.default.number().required().messages({
                "any.required": "Type is required",
                "number.base": "Type must be number",
            }),
            name: joi_1.default.string().required().messages({
                "any.required": "Name is required",
                "string.base": "Name must be string",
            }),
            length: joi_1.default.number().required().messages({
                "any.required": "Length is required",
                "number.base": "Length must be number",
            }),
            length_unit_id: joi_1.default.number().required().messages({
                "any.required": "Length unit is required",
                "number.base": "Length unit must be number",
            }),
            weight: joi_1.default.number().required().messages({
                "any.required": "Weight is required",
                "number.base": "Weight must be number",
            }),
            weight_unit_id: joi_1.default.number().required().messages({
                "any.required": "Weight unit is required",
                "number.base": "Weight unit must be number",
            }),
            size: joi_1.default.number().required().messages({
                "any.required": "Size is required",
                "number.base": "Size must be number",
            }),
            size_unit_id: joi_1.default.number().required().messages({
                "any.required": "Size unit is required",
                "number.base": "Size unit must be number",
            }),
            total_weight: joi_1.default.number().required().messages({
                "any.required": "Total weight is required",
                "number.base": "Total weight must be number",
            }),
            total_weight_unit_id: joi_1.default.number().required().messages({
                "any.required": "Total weight unit is required",
                "number.base": "Total weight unit must be number",
            }),
            gold_types_id: joi_1.default.number().required().messages({
                "any.required": "Gold type is required",
                "number.base": "Gold type must be number",
            }),
            gold_color_id: joi_1.default.number().required().messages({
                "any.required": "Gold color is required",
                "number.base": "Gold color must be number",
            }),
            gems_price: joi_1.default.number().required().messages({
                "any.required": "Gems price is required",
                "number.base": "Gems price must be number",
            }),
            ayoutwat: joi_1.default.number().required().messages({
                "any.required": "Ayoutwat is required",
                "number.base": "Ayoutwat must be number",
            }),
            latt_kha: joi_1.default.number().required().messages({
                "any.required": "Latt kha is required",
                "number.base": "Latt kha must be number",
            }),
            m_product_gems: joi_1.default.array()
                .items(joi_1.default.object({
                name: joi_1.default.string().required().messages({
                    "any.required": "Gem name is required",
                    "string.base": "Gem name must be string",
                }),
                pieces: joi_1.default.number().required().messages({
                    "any.required": "Pieces is required",
                    "number.base": "Pieces must be number",
                }),
                color_id: joi_1.default.number().required().messages({
                    "any.required": "Color is required",
                    "number.base": "Color must be number",
                }),
                weight: joi_1.default.number().required().messages({
                    "any.required": "Weight is required",
                    "number.base": "Weight must be number",
                }),
                weight_unit_id: joi_1.default.number().required().messages({
                    "any.required": "Weight unit is required",
                    "number.base": "Weight unit must be number",
                }),
                icon: joi_1.default.string().required().messages({
                    "any.required": "Icon is required",
                    "string.base": "Icon must be string",
                }),
            }))
                .required()
                .messages({
                "any.required": "Gem slot is required",
                "array.base": "Gem slot must be an array",
            }),
        }),
    },
};
const validateBody = (schema) => {
    return async (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            return response_1.response.fail(res, 406, error.message, "Validation Error");
        }
        else {
            next();
        }
    };
};
exports.validateBody = validateBody;
