import { Request, Response } from "express";
import { MasterSettingService } from "../services/master_setting.service";
const masterSetting_service = new MasterSettingService();


// Today Gold Price
export const createTodayGoldPrice = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const todayGoldPrice = req.body;

    await masterSetting_service.createTodayGoldPrice(todayGoldPrice);
    return res.status(200).json({
      success: true,
      message: "Today gold price created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating today gold price",
      error: error,
    });
  }
};

export const updateTodayGoldPrice = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id = req.params.id;
    const todayGoldPrice = req.body;
    await masterSetting_service.updateTodayGoldPrice(todayGoldPrice, BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Today gold price updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating today gold price",
      error: error,
    });
  }
};


export const deleteTodayGoldPrice = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id = req.params.id;
    await masterSetting_service.deleteTodayGoldPrice(BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Today gold price deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting today gold price",
      error: error,
    });
  }
};

export const getAllTodayGoldPrice = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const todayGoldPrice = await masterSetting_service.getAllTodayGoldPrice();
    return res.status(200).json({
      success: true,
      data: todayGoldPrice,
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error getting all today gold price",
      error: error,
    });
  }
};


// Gold Type
export const createGoldType = async (req: Request, res: Response): Promise<any> => {
  try {
    const goldType = req.body;
    await masterSetting_service.createGoldType(goldType);
    return res.status(200).json({
      success: true,
      message: "Gold type created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating gold type",
      error: error,
    });
  }
};

export const updateGoldType = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const goldType = req.body;
    await masterSetting_service.updateGoldType(goldType, BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Gold type updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating gold type",
      error: error,
    });
  }
};

export const deleteGoldType = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    await masterSetting_service.deleteGoldType(BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Gold type deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting gold type",
      error: error,
    });
  }
};

export const getAllGoldType = async (req: Request, res: Response): Promise<any> => {
  try {
    const goldType = await masterSetting_service.getAllGoldType();
    return res.status(200).json({
      success: true,
      data: goldType,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all gold type",
      error: error,
    });
  }
};

// Gem Type
export const createGemType = async (req: Request, res: Response): Promise<any> => {
  try {
    const gemType = req.body;
    await masterSetting_service.createGemType(gemType);
    return res.status(200).json({
      success: true,
      message: "Gem type created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error creating gem type",
      error: error,
    });
  }
};

export const updateGemType = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const gemType = req.body;
    await masterSetting_service.updateGemType(gemType, BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Gem type updated successfully",
    });   
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating gem type",
      error: error,
    });
  }
};

export const deleteGemType = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    await masterSetting_service.deleteGemType(BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Gem type deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting gem type",
      error: error,
    });
  }
};

export const getAllGemType = async (req: Request, res: Response): Promise<any> => {
  try { 
    const gemType = await masterSetting_service.getAllGemType();
    return res.status(200).json({
      success: true,
      data: gemType,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all gem type",
      error: error,
    });
  }
};

// Unit

export const createUnit = async (req: Request, res: Response): Promise<any> => {
  try {
    const unit = req.body;
    await masterSetting_service.createUnit(unit);
    return res.status(200).json({
      success: true,
      message: "Unit created successfully",
    });   
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating unit",
      error: error,
    });
  }
};

export const updateUnit = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const unit = req.body;
    await masterSetting_service.updateUnit(unit, BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Unit updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating unit",
      error: error,
    });
  }
};

export const deleteUnit = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    await masterSetting_service.deleteUnit(BigInt(id));
    return res.status(200).json({
      success: true,
      message: "Unit deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting unit",
      error: error,
    });
  }
};

export const getAllUnit = async (req: Request, res: Response): Promise<any> => {
  const type = req.query.type as string ;
  try {
    const unit = await masterSetting_service.getAllUnit(Number(type));
    return res.status(200).json({
      success: true,
      data: unit,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all unit",
      error: error,
    });
  }
};

//m_colors
export const getAllColor = async (req: Request, res: Response): Promise<any> => {
  try {
    const color = await masterSetting_service.getAllColor();

    return res.status(200).json({
      success: true,
      data: color,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error getting all color",
      error: error,
    });
  }
};

export const createColor = async (req: Request, res: Response): Promise<any> => {
  try {
    const color = req.body;
    await masterSetting_service.createColor(color);
    return res.status(200).json({
      success: true,
      message: "Color created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating color",
      error: error,
    });
  }
};

//m_gem_icons
export const getAllGemIcon = async (req: Request, res: Response): Promise<any> => {
  try {
    const gemIcon = await masterSetting_service.getAllGemIcon();
    return res.status(200).json({
      success: true,
      data: gemIcon,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all gem icon",
      error: error,
    });
  }
};

export const createGemIcon = async (req: Request, res: Response): Promise<any> => {
  try {
    const gemIcon = req.body;
    await masterSetting_service.createGemIcon(gemIcon);
    return res.status(200).json({
      success: true,
      message: "Gem icon created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating gem icon",
      error: error,
    });
  }
};

//m_states
export const getAllState = async (req: Request, res: Response): Promise<any> => {
  try {
    const state = await masterSetting_service.getAllState();
    return res.status(200).json({
      success: true,
      data: state,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all state",
      error: error,
    });
  }
};

//m_cities
export const getAllCity = async (req: Request, res: Response): Promise<any> => {
  const state_id = req.params.state_id;
  try {
    const city = await masterSetting_service.getAllCity(Number(state_id));
    return res.status(200).json({
      success: true,
      data: city,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all city",
      error: error,
    });
  } 
};

//m_levels
export const getAllLevel = async (req: Request, res: Response): Promise<any> => {
  try {
    const level = await masterSetting_service.getAllLevel();
    return res.status(200).json({
      success: true,
      data: level,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting all level",
      error: error,
    });
  }
};
