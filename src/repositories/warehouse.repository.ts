import { PrismaClient, m_warehouse_types,m_warehouses } from "@prisma/client";
import { WarehouseType } from "../models/warehouse.class";
export class WarehouseRepository{
    private prisma = new PrismaClient();

    async getAllWarehouseTypes(): Promise<any[]> {
        const warehouseTypes = await this.prisma.m_warehouse_types.findMany();
        console.log("from respository",warehouseTypes);
        return warehouseTypes;
    }
} 