"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryService = void 0;
const product_category_repository_1 = require("../repositories/product_category.repository");
class ProductCategoryService {
    constructor() {
        this.productCategoryRepository = new product_category_repository_1.ProductCategoryRepository();
    }
    async getAllProductCategories(page, limit) {
        return await this.productCategoryRepository.getAll(page, limit);
    }
    async getAllProductCategoryCount() {
        return await this.productCategoryRepository.getAllCount();
    }
}
exports.ProductCategoryService = ProductCategoryService;
