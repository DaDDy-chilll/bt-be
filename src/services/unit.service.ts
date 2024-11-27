import { UnitRepository } from "../repositories/unit.repository";

export class UnitService {
  private unitRepository = new UnitRepository();

  async getAllUnits(page: number, limit: number) {
    return await this.unitRepository.getAll(page, limit);
  }

  async getAllUnitCount(): Promise<number> {
    return await this.unitRepository.getAllCount();
  }
}
