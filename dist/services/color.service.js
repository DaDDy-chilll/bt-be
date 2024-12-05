"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorService = void 0;
const color_repository_1 = require("../repositories/color.repository");
class ColorService {
    constructor() {
        this.colorRepository = new color_repository_1.ColorRepository();
    }
    async getAllColors(page, limit) {
        return await this.colorRepository.getAll(page, limit);
    }
    async getAllColorCount() {
        return await this.colorRepository.getAllCount();
    }
}
exports.ColorService = ColorService;
