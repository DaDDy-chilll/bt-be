import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { number } from "joi";

const product_service = new ProductService();

export const createProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.user;
    await product_service.createProduct(req.body, BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error,
    });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const product_id = req.params.id;
    await product_service.updateProduct(req.body, BigInt(product_id));
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error,
    });
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const products = await product_service.getAllProducts(
      Number(page),
      Number(limit)
    );
    const total_products = await product_service.getAllProductCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_products,
      total_pages: Math.ceil(total_products / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error,
    });
  }
};
