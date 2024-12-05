"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeService = void 0;
const product_type_repository_1 = require("../repositories/product_type.repository");
class ProductTypeService {
    constructor() {
        this.productTypeRepository = new product_type_repository_1.ProductTypeRepository();
    }
    async getAllProductTypes(page, limit) {
        return await this.productTypeRepository.getAll(page, limit);
    }
    async getAllProductTypeCount() {
        return await this.productTypeRepository.getAllCount();
    }
}
exports.ProductTypeService = ProductTypeService;
