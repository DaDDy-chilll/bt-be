import { TaxRepository } from "../repositories/tax.repository";

export class TaxService {
  private taxRepository = new TaxRepository();

  async getTaxById(id: number) {
    return await this.taxRepository.getTaxById(id);
  }
}
