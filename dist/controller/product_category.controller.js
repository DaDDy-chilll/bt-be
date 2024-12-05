"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductCategories = void 0;
const product_category_service_1 = require("../services/product_category.service");
const product_category_service = new product_category_service_1.ProductCategoryService();
const getAllProductCategories = async (req, res) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const productCategories = await product_category_service.getAllProductCategories(Number(page), Number(limit));
        const total_product_categories = await product_category_service.getAllProductCategoryCount();
        const pagination = {
            page: Number(page),
            limit: Number(limit),
            total: total_product_categories,
            total_pages: Math.ceil(total_product_categories / Number(limit)),
        };
        return res.status(200).json({
            success: true,
            message: "Product categories fetched successfully",
            data: productCategories,
            pagination: pagination,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching product categories",
            error: error,
        });
    }
};
exports.getAllProductCategories = getAllProductCategories;
