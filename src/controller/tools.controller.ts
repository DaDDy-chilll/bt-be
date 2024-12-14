import { Request, Response } from "express";
import { ToolsService } from "../services/tools.service";
import Tools from "../models/tools.class";

const tools_service = new ToolsService();

export const getAllTools = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const tools = await tools_service.getAllTools();

    return res.status(200).json({
      success: true,
      message: "Tools fetched successfully",
      data: tools,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching tools",
      error: error,
    });
  }
};

export const createTool = async (req: Request, res: Response): Promise<any> => {
  try {
    const tool = new Tools(req.body);

    await tools_service.createTool(tool);
    return res.status(200).json({
      success: true,
      message: "Tool created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating tool",
      error: error,
    });
  }
};

export const updateTool = async (req: Request, res: Response): Promise<any> => {
  try {
    const tool = new Tools(req.body);

    await tools_service.updateTool(tool, req.params.id);
    return res.status(200).json({
      success: true,
      message: "Tool updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating tool",
      error: error,
    });
  }
};
