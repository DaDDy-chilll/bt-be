import { Request, Response } from "express";
import { SupplierService } from "../services/supplier.service";
import { IMemo } from "../instances/supplier/supplier.instance";
const supplier_service = new SupplierService();

export const createSupplier = async (req: Request, res: Response): Promise<any> => {
  try {
    const supplier = req.body;
    await supplier_service.createSupplier(supplier);
    return res.status(200).json({
      success: true,
      message: "Supplier created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating supplier",
      error: error,
    });
  }
};

export const getSupplierById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = Number(req.params.id);
    const supplier = await supplier_service.getSupplierById(id);
    return res.status(200).json({
    success: true,
    message: "Supplier fetched successfully",
    data: supplier,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching supplier",
      error: error,
    });
  }
};

export const getAllSuppliers = async (req: Request, res: Response): Promise<any> => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const filters={
      name: req.query.name ? req.query.name : null,
      contact_name: req.query.contact_name ? req.query.contact_name : null,
      email: req.query.email ? req.query.email : null,
      date_from: req.query.date_from ? req.query.date_from : null,
      date_to: req.query.date_to ? req.query.date_to : null,
      state_id: req.query.state_id ? req.query.state_id : null,
      city_id: req.query.city_id ? req.query.city_id : null,
    }
    if(filters){
      Object.keys(filters).forEach(key => {
        if ((filters as any)[key] === null) {
          delete (filters as any)[key];
        }
      });
    }

    const suppliers = await supplier_service.getAllSuppliers(page, limit, filters);
    return res.status(200).json({
      success: true,
      message: "Suppliers fetched successfully",
      data: suppliers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching suppliers",
      error: error,
    });
  }
};

export const updateSupplier = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = Number(req.params.id);
    const supplier = req.body;
    await supplier_service.updateSupplier(id, supplier);
    return res.status(200).json({
    success: true,
    message: "Supplier updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating supplier",
      error: error,
    });
  }
};

export const deleteSupplier = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = Number(req.params.id);   
    await supplier_service.deleteSupplier(id);
    return res.status(200).json({
      success: true,
      message: "Supplier deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting supplier",
      error: error,
    });
  }
};

export const createMemo = async (req: Request, res: Response): Promise<any> => {
  try {
    const memo = req.body;
    const created_by = req.user.id;
    await supplier_service.createMemo({...memo, created_by});
    return res.status(200).json({
      success: true,
      message: "Memo created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating memo",
      error: error,
    });
  }
};