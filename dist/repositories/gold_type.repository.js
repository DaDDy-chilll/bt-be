"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldTypeRepository = void 0;
const client_1 = require("@prisma/client");
class GoldTypeRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll(page, limit) {
        const goldTypes = await this.prisma.m_gold_types.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        //serialize
        const castedGoldTypes = goldTypes.map((goldType) => ({
            ...goldType,
            id: Number(goldType.id),
        }));
        return castedGoldTypes;
    }
    async getAllCount() {
        return await this.prisma.m_gold_types.count();
    }
}
exports.GoldTypeRepository = GoldTypeRepository;
