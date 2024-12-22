import {Request, Response} from 'express';
import { WarehouseService } from '../services/warehouse.service';
const warehouse_service = new WarehouseService();

export const getAllWarehouse = async (req: Request, res: Response): Promise<any> => {
    try {
        return res.status(200).json({
        success: true,
        data: 'warehouses',
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Error fetching warehouses',
        error: error,
        });
    }
}


export const createWarehouse = async (req: Request, res: Response): Promise<any> => { 
    try {
        return res.status(200).json({
        success: true,
        data: 'warehouse created',
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Error creating warehouse',
        error: error,
        });
    }
}

export const getAllWarehouseType = async (req: Request, res: Response): Promise<any> => {
    try {
        const warehouseTypes = await warehouse_service.getAllWarehouseTypes();
        return res.status(200).json({success: true, data: warehouseTypes});
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: 'Error fetching warehouse types',
        error: error,
        });
    }
}