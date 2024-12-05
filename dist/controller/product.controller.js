"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.updateProduct = exports.createProduct = void 0;
const product_service_1 = require("../services/product.service");
const product_service = new product_service_1.ProductService();
const createProduct = async (req, res) => {
    try {
        const { id } = req.user;
        await product_service.createProduct(req.body, BigInt(id));
        return res.status(200).json({
            success: true,
            message: "Product created successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error,
        });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        await product_service.updateProduct(req.body, BigInt(product_id));
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error updating product",
            error: error,
        });
    }
};
exports.updateProduct = updateProduct;
const getAllProducts = async (req, res) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const products = await product_service.getAllProducts(Number(page), Number(limit));
        const total_products = await product_service.getAllProductCount();
        const pagination = {
            page: Number(page),
            limit: Number(limit),
            total: total_products,
            total_pages: Math.ceil(total_products / Number(limit)),
        };
        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products,
            pagination: pagination,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error,
        });
    }
};
exports.getAllProducts = getAllProducts;
