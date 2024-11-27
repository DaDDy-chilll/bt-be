import { ColorRepository } from "../repositories/color.repository";

export class ColorService {
  private colorRepository = new ColorRepository();

  async getAllColors(page: number, limit: number) {
    return await this.colorRepository.getAll(page, limit);
  }

  async getAllColorCount(): Promise<number> {
    return await this.colorRepository.getAllCount();
  }
}
