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
