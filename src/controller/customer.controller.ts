import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";

const customer_service = new CustomerService();

export const createCustomer = async (req: Request, res: Response) :Promise<any> => {
  try {
    const customer = req.body;
    const newCustomer = await customer_service.createCustomer(customer);
    return res.status(201).json(newCustomer);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating customer",
      error: error,
    });
  }
};

export const updateCustomer = async (req: Request, res: Response) :Promise<any> => {
  try {
    const customer = req.body;
    const id = Number(req.params.id);
    const updatedCustomer = await customer_service.updateCustomer(customer, id);
    return res.status(200).json(updatedCustomer);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating customer",
      error: error,
    });
  }
};

export const deleteCustomer = async (req: Request, res: Response) :Promise<any> => {
  try {
    const id = Number(req.params.id);
    const deletedCustomer = await customer_service.deleteCustomer(id);
    return res.status(200).json(deletedCustomer);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting customer",
      error: error,
    });
  }
};

export const getAllCustomers = async (req: Request, res: Response) :Promise<any> => {
  try {
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 10;
     const filters ={
        first_name: req.query.first_name ? req.query.first_name : undefined,   
        last_name: req.query.last_name ? req.query.last_name : undefined,
        email: req.query.email ? req.query.email : undefined,
        nrc: req.query.nrc ? req.query.nrc : undefined,
        status: req.query.status ? req.query.status : undefined,
        level_id: req.query.level_id ? req.query.level_id : undefined,
    }
    if(filters){    
      Object.keys(filters).forEach((key) => {
          if ((filters as any)[key] === undefined) {
            delete (filters as any)[key];
          }
        });
    }
    const customers = await customer_service.getAllCustomers(page, limit, filters);
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting customers",
      error: error,
    });
  }
};

export const getCustomerById= async (req: Request, res: Response) :Promise<any> => {
  try {
    const id = Number(req.params.id);
    const customer = await customer_service.getCustomerById(id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error getting customer",
      error: error,
    });
  }
};
