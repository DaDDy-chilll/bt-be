import { Request, Response } from "express";
import { ProductTypeService } from "../services/product_type.service";

const product_type_service = new ProductTypeService();

export const getAllProductTypes = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const productTypes = await product_type_service.getAllProductTypes(
      Number(page),
      Number(limit)
    );
    const total_product_types = await product_type_service.getAllProductTypeCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_product_types,
      total_pages: Math.ceil(total_product_types / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Product types fetched successfully",
      data: productTypes,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching product types",
      error: error,
    });
  }
};
