"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitService = void 0;
const unit_repository_1 = require("../repositories/unit.repository");
class UnitService {
    constructor() {
        this.unitRepository = new unit_repository_1.UnitRepository();
    }
    async getAllUnits(page, limit) {
        return await this.unitRepository.getAll(page, limit);
    }
    async getAllUnitCount() {
        return await this.unitRepository.getAllCount();
    }
}
exports.UnitService = UnitService;
