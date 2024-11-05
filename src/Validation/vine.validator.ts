import { response } from "../common/response";
import Joi from "joi";
export const schema = {
  auth: {
    register: Joi.object({
      username: Joi.string().required().messages({
        "any.required": "Username is required",
        "string.base": "Username must be string",
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
      return response.fail(res, 400, error.message, "Validation Error");
    } else {
      next();
    }
  };
};
