"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_repository_1 = require("../repositories/product.repository");
const crypto_1 = require("crypto");
class ProductService {
    constructor() {
        this.productRepository = new product_repository_1.ProductRepository();
    }
    async createProduct(data, id) {
        data.code = await this.generateProductId();
        data.created_by = id;
        await this.productRepository.createWithGems(data);
    }
    async generateProductId() {
        //date       generateId
        //20241126 - 0000001
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const generateId = (0, crypto_1.randomInt)(1, 999999);
        const productId = `${date} - ${generateId.toString().padStart(7, "0")}`;
        return productId;
    }
    async updateProduct(data, id) {
        await this.productRepository.update(data, id);
    }
    async getAllProducts(page, limit) {
        return await this.productRepository.getAll(page, limit);
    }
    async getAllProductCount() {
        return await this.productRepository.getAllProductCount();
    }
}
exports.ProductService = ProductService;
