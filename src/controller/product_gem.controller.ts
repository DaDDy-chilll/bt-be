import { Request, Response } from "express";
import { ProductGemService } from "../services/product_gem.service";

const product_gem_service = new ProductGemService();

export const getAllProductGems = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const productGems = await product_gem_service.getAllProductGems(
      Number(page),
      Number(limit)
    );
    const total_product_gems =
      await product_gem_service.getAllProductGemCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_product_gems,
      total_pages: Math.ceil(total_product_gems / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Product gems fetched successfully",
      data: productGems,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching product gems",
      error: error,
    });
  }
};
