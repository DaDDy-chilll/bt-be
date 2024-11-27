import { Request, Response } from "express";
import { ProductTypeService } from "../services/product_type.service";
import { ProductCategoryService } from "../services/product_category.service";

const product_category_service = new ProductCategoryService();

export const getAllProductCategories = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const productCategories =
      await product_category_service.getAllProductCategories(
        Number(page),
        Number(limit)
      );
    const total_product_categories =
      await product_category_service.getAllProductCategoryCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_product_categories,
      total_pages: Math.ceil(total_product_categories / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Product categories fetched successfully",
      data: productCategories,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching product categories",
      error: error,
    });
  }
};
