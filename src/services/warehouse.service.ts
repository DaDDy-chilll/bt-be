import { WarehouseType } from "../models/warehouse.class";
import { WarehouseRepository } from "../repositories/warehouse.repository";

export class WarehouseService {
    private warehouseRepository = new WarehouseRepository();

    async getAllWarehouseTypes(): Promise<WarehouseRepository[]> {
        return this.warehouseRepository.getAllWarehouseTypes();
    }
}