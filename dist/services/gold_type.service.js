"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldTypeService = void 0;
const gold_type_repository_1 = require("../repositories/gold_type.repository");
class GoldTypeService {
    constructor() {
        this.goldTypeRepository = new gold_type_repository_1.GoldTypeRepository();
    }
    async getAllGoldTypes(page, limit) {
        return await this.goldTypeRepository.getAll(page, limit);
    }
    async getAllGoldTypeCount() {
        return await this.goldTypeRepository.getAllCount();
    }
}
exports.GoldTypeService = GoldTypeService;
