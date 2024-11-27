import { Request, Response } from "express";
import { GemTypeService } from "../services/gem_type.service";
import { ColorService } from "../services/color.service";

const color_service = new ColorService();

export const getAllColors = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const colors = await color_service.getAllColors(Number(page), Number(limit));

    const total_colors = await color_service.getAllColorCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_colors,
      total_pages: Math.ceil(total_colors / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Colors fetched successfully",
      data: colors,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching colors",
      error: error,
    });
  }
};
