"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemTypeRepository = void 0;
const client_1 = require("@prisma/client");
class GemTypeRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll(page, limit) {
        const gemTypes = await this.prisma.m_gem_types.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        //serialize
        const castedGemTypes = gemTypes.map((gemType) => ({
            ...gemType,
            id: Number(gemType.id),
            color_id: Number(gemType.color_id),
            weight_unit_id: Number(gemType.weight_unit_id),
        }));
        return castedGemTypes;
    }
    async getAllCount() {
        return await this.prisma.m_gem_types.count();
    }
}
exports.GemTypeRepository = GemTypeRepository;
