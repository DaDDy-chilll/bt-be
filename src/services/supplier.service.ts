import { SupplierRepository } from "../repositories/supplier.repository";
import { IMemo, ISupplier } from "../instances/supplier/supplier.instance";
export class SupplierService {
  private supplierRepository = new SupplierRepository();

  async getAllSuppliers(page: number, limit: number, filters: any) {
    return await this.supplierRepository.getAllSuppliers(page, limit, filters);
  }

  async getSupplierById(id: number) {
    return await this.supplierRepository.getSupplierById(id);
  }

  async createSupplier(supplier: ISupplier) {
    return await this.supplierRepository.createSupplier(supplier);
  }

  async updateSupplier(id: number, supplier: ISupplier) {
    return await this.supplierRepository.updateSupplier(id, supplier);
  }

  async deleteSupplier(id: number) {
    return await this.supplierRepository.deleteSupplier(id);
  }

  async createMemo(memo: IMemo) {
    return await this.supplierRepository.createMemo(memo);
  }
}
