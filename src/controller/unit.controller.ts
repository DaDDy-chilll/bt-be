import { Request, Response } from "express";
import { UnitService } from "../services/unit.service";

const unit_service = new UnitService();

export const getAllUnits = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    const units = await unit_service.getAllUnits(Number(page), Number(limit));
    const total_units = await unit_service.getAllUnitCount();

    const pagination = {
      page: Number(page),
      limit: Number(limit),
      total: total_units,
      total_pages: Math.ceil(total_units / Number(limit)),
    };
    return res.status(200).json({
      success: true,
      message: "Units fetched successfully",
      data: units,
      pagination: pagination,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching units",
      error: error,
    });
  }
};
