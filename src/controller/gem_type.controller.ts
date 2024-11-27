import { Request, Response } from "express";
    import { GemTypeService } from "../services/gem_type.service";

const gem_type_service = new GemTypeService();

export const getAllGemTypes = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const gemTypes = await gem_type_service.getAllGemTypes(
      Number(page),
      Number(limit)
    );
    const total_gem_types = await gem_type_service.getAllGemTypeCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_gem_types,
      total_pages: Math.ceil(total_gem_types / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Gem types fetched successfully",
      data: gemTypes,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching gem types",
      error: error,
    });
  }
};
