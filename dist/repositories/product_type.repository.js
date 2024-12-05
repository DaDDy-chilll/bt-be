"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeRepository = void 0;
const client_1 = require("@prisma/client");
class ProductTypeRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll(page, limit) {
        const productTypes = await this.prisma.m_product_types.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        //serialize
        const castedProductTypes = productTypes.map((productType) => ({
            ...productType,
            id: Number(productType.id),
        }));
        return castedProductTypes;
    }
    async getAllCount() {
        return await this.prisma.m_product_types.count();
    }
}
exports.ProductTypeRepository = ProductTypeRepository;
