"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGemService = void 0;
const product_gem_repository_1 = require("../repositories/product_gem.repository");
class ProductGemService {
    constructor() {
        this.productGemRepository = new product_gem_repository_1.ProductGemRepository();
    }
    async getAllProductGems(page, limit) {
        return await this.productGemRepository.getAll(page, limit);
    }
    async getAllProductGemCount() {
        return await this.productGemRepository.getAllCount();
    }
}
exports.ProductGemService = ProductGemService;
