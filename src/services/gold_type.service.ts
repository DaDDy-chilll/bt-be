import { GoldTypeRepository } from "../repositories/gold_type.repository";

export class GoldTypeService {
  private goldTypeRepository = new GoldTypeRepository();

  async getAllGoldTypes(page: number, limit: number) {
    return await this.goldTypeRepository.getAll(page, limit);
  }

  async getAllGoldTypeCount(): Promise<number> {
    return await this.goldTypeRepository.getAllCount();
  }
}
