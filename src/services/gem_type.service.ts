import { GemTypeRepository } from "../repositories/gem_type.repository";

export class GemTypeService {
    private gemTypeRepository = new GemTypeRepository();

  async getAllGemTypes(page: number, limit: number) {
    return await this.gemTypeRepository.getAll(page, limit);
  }

  async getAllGemTypeCount(): Promise<number> {
    return await this.gemTypeRepository.getAllCount();
  }
}
