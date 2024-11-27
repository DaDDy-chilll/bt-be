import { response } from "../common/response";
import Joi from "joi";
export const schema = {
  auth: {
    login: Joi.object({
      email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.base": "Email must be string",
        "string.email": "Invalid email",
      }),
      password: Joi.string()
        .min(8)
        .max(16)
        .pattern(new RegExp("^(?=.*[A-Z])(?=.*\\d).+$"))
        .required()
        .messages({
          "any.required": "Password is required",
          "string.base": "Password must be string",
          "string.min": "Password must be at least 8 characters",
          "string.max": "Password must be at most 32 characters",
          "string.pattern.base":
            "Password must contain at least One Uppercase letter and One Number",
        }),
    }),
    register: Joi.object({
      email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.base": "Email must be string",
        "string.email": "Invalid email",
      }),
      password: Joi.string()
        .min(8)
        .max(16)
        .pattern(new RegExp("^(?=.*[A-Z])(?=.*\\d).+$"))
        .required()
        .messages({
          "any.required": "Password is required",
          "string.base": "Password must be string",
          "string.min": "Password must be at least 8 characters",
          "string.max": "Password must be at most 32 characters",
          "string.pattern.base":
            "Password must contain at least One Uppercase letter and One Number",
        }),
    }),
  },
  product: {
    create: Joi.object({
      category_id: Joi.number().required().messages({
        "any.required": "Category is required",
        "number.base": "Category must be number",
      }),
      type_id: Joi.number().required().messages({
        "any.required": "Type is required",
        "number.base": "Type must be number",
      }),
      name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.base": "Name must be string",
      }),
      length: Joi.number().required().messages({
        "any.required": "Length is required",
        "number.base": "Length must be number",
      }),
      length_unit_id: Joi.number().required().messages({
        "any.required": "Length unit is required",
        "number.base": "Length unit must be number",
      }),
      weight: Joi.number().required().messages({
        "any.required": "Weight is required",
        "number.base": "Weight must be number",
      }),
      weight_unit_id: Joi.number().required().messages({
        "any.required": "Weight unit is required",
        "number.base": "Weight unit must be number",
      }),
      size: Joi.number().required().messages({
        "any.required": "Size is required",
        "number.base": "Size must be number",
      }),
      size_unit_id: Joi.number().required().messages({
        "any.required": "Size unit is required",
        "number.base": "Size unit must be number",
      }),
      total_weight: Joi.number().required().messages({
        "any.required": "Total weight is required",
        "number.base": "Total weight must be number",
      }),
      total_weight_unit_id: Joi.number().required().messages({
        "any.required": "Total weight unit is required",
        "number.base": "Total weight unit must be number",
      }),
      gold_types_id: Joi.number().required().messages({
        "any.required": "Gold type is required",
        "number.base": "Gold type must be number",
      }),
      gold_color_id: Joi.number().required().messages({
        "any.required": "Gold color is required",
        "number.base": "Gold color must be number",
      }),
      gems_price: Joi.number().required().messages({
        "any.required": "Gems price is required",
        "number.base": "Gems price must be number",
      }),
      ayoutwat: Joi.number().required().messages({
        "any.required": "Ayoutwat is required",
        "number.base": "Ayoutwat must be number",
      }),
      latt_kha: Joi.number().required().messages({
        "any.required": "Latt kha is required",
        "number.base": "Latt kha must be number",
      }),
      m_product_gems: Joi.array()
        .items(
          Joi.object({
            name: Joi.string().required().messages({
              "any.required": "Gem name is required",
              "string.base": "Gem name must be string",
            }),
            pieces: Joi.number().required().messages({
              "any.required": "Pieces is required",
              "number.base": "Pieces must be number",
            }),
            color_id: Joi.number().required().messages({
              "any.required": "Color is required",
              "number.base": "Color must be number",
            }),
            weight: Joi.number().required().messages({
              "any.required": "Weight is required",
              "number.base": "Weight must be number",
            }),
            weight_unit_id: Joi.number().required().messages({
              "any.required": "Weight unit is required",
              "number.base": "Weight unit must be number",
            }),
            icon: Joi.string().required().messages({
              "any.required": "Icon is required",
              "string.base": "Icon must be string",
            }),
          })
        )
        .required()
        .messages({
          "any.required": "Gem slot is required",
          "array.base": "Gem slot must be an array",
        }),
    }),
  },
};

export const validateBody = (schema: Joi.Schema) => {
  return async (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return response.fail(res, 406, error.message, "Validation Error");
    } else {
      next();
    }
  };
};
