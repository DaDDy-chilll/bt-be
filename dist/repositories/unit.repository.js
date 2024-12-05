"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRepository = void 0;
const client_1 = require("@prisma/client");
class UnitRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll(page, limit) {
        const units = await this.prisma.m_units.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        //serialize
        const castedUnits = units.map((unit) => ({
            ...unit,
            id: Number(unit.id),
        }));
        return castedUnits;
    }
    async getAllCount() {
        return await this.prisma.m_units.count();
    }
}
exports.UnitRepository = UnitRepository;
