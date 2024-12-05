"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRepository = void 0;
const client_1 = require("@prisma/client");
class ProductCategoryRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll(page, limit) {
        const productCategories = await this.prisma.m_product_categories.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        //serialize
        const castedProductCategories = productCategories.map((productCategory) => ({
            ...productCategory,
            id: Number(productCategory.id),
        }));
        return castedProductCategories;
    }
    async getAllCount() {
        return await this.prisma.m_product_categories.count();
    }
}
exports.ProductCategoryRepository = ProductCategoryRepository;
