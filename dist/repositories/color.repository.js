"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRepository = void 0;
const client_1 = require("@prisma/client");
class ColorRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll(page, limit) {
        const colors = await this.prisma.m_colors.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        //serialize
        const castedColors = colors.map((color) => ({
            ...color,
            id: Number(color.id),
        }));
        return castedColors;
    }
    async getAllCount() {
        return await this.prisma.m_colors.count();
    }
}
exports.ColorRepository = ColorRepository;
