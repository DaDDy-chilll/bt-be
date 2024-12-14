import { Request, Response } from "express";
import { OrderService } from "../services/order.service";
import Order from "../models/order.class";
// import Order from "../models/order.class";
import { OrderCategoryService } from "../services/order_category.service";
import OrderDetail from "../models/order_detail.class";
import { OrderDetailService } from "../services/order_detail.service";
import { UserService } from "../services/user.service";
import { ToolsService } from "../services/tools.service";
import { CustomerService } from "../services/customer.service";
import { TaxService } from "../services/tax.service";
import { ProductService } from "../services/product.service";

const order_service = new OrderService();
const order_category_service = new OrderCategoryService();
const order_detail_service = new OrderDetailService();
const user_service = new UserService();
const tools_service = new ToolsService();
const customer_service = new CustomerService();
const tax_service = new TaxService();
const product_service = new ProductService();
export const createOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const order_category = await order_category_service.getOrderCategoryById(
      req.body.order_category_id
    );

    if (!order_category) {
      return res.status(404).json({
        success: false,
        message: "Order category not found",
      });
    }

    const sales_person = await user_service.getUserById(req.user.id);

    if (!sales_person) {
      return res.status(404).json({
        success: false,
        message: "Sales person not found",
      });
    }

    const gold_calculate_method = await tools_service.getToolByMethodId(
      req.body.gold_calculate_method_id
    );

    if (!gold_calculate_method) {
      return res.status(404).json({
        success: false,
        message: "Gold calculate method not found",
      });
    }

    const customer = await customer_service.getCustomerById(
      req.body.customer_id
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    const tax = await tax_service.getTaxById(req.body.tax_id);

    if (!tax) {
      return res.status(404).json({
        success: false,
        message: "Tax not found",
      });
    }

    const order = new Order(req.body);
    order.status = 1;
    const created_order = await order_service.createOrder(order);

    for (const m_order_detail of req.body.m_order_products) {
      const order_detail = new OrderDetail(m_order_detail as OrderDetail);
      const product = await product_service.getProductByProductId(
        m_order_detail.product_id
      );
      if (product) {
        order_detail.order_id = created_order.id;
        order_detail.status = 1;
        await order_detail_service.createOrderDetail(order_detail);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error creating order",
      error: error,
    });
  }
};
