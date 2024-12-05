"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemTypeService = void 0;
const gem_type_repository_1 = require("../repositories/gem_type.repository");
class GemTypeService {
    constructor() {
        this.gemTypeRepository = new gem_type_repository_1.GemTypeRepository();
    }
    async getAllGemTypes(page, limit) {
        return await this.gemTypeRepository.getAll(page, limit);
    }
    async getAllGemTypeCount() {
        return await this.gemTypeRepository.getAllCount();
    }
}
exports.GemTypeService = GemTypeService;
