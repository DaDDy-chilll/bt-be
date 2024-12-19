import { PrismaClient } from "@prisma/client";
import { IMemo, ISupplier } from "../instances/supplier/supplier.instance";
import { Prisma } from "@prisma/client";
import Supplier from "../models/supplier.class";
export class SupplierRepository {
  private prisma = new PrismaClient();

  async getSupplierById(id: number) {
    const supplier = await this.prisma.m_suppliers.findUnique({
      include: {
        m_states: true,
        m_cities: true,
        t_supplier_memos: {
          where: {
            del_flg: 0,
          },
        },
      },
      where: { id },
    });
    return supplier ? new Supplier(supplier) : undefined;
  }

  async getAllSuppliers(page: number, limit: number, filters: any) {

    const where: Prisma.m_suppliersWhereInput = {
      del_flg: 0,
    };

    if (filters) {
      if (filters.name) {
        where.name = {
          contains: filters.name,
        };
      }
      if (filters.contact_name) {
        where.contact_name = {
          contains: filters.contact_name,
        };
      }
      if (filters.email) {
        where.email = {
          contains: filters.email,
        };
      }
      if(filters.date_from){
        where.contact_start_date = {
          gte: filters.date_from,
        };
      }
      if(filters.date_to){
        where.contact_start_date = {
          lte: filters.date_to,
        };
      }
      if(filters.state_id){
        where.state_id = {
          equals: filters.state_id,
        };
      }
      if(filters.city_id){
        where.city_id = {
          equals: filters.city_id,
        };
      }
    }

    const suppliers = await this.prisma.m_suppliers.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        m_states: true,
        m_cities: true,
        t_supplier_memos: {
          where: {
            del_flg: 0,
          },
        },
      },
      where,
      orderBy: {
        created_at: 'desc'
      }
    });
    const supplierList = suppliers.map((supplier) => {
      return new Supplier(supplier);
    });
    return supplierList;
  }



  async createSupplier(supplier: ISupplier) {
    const newSupplier = await this.prisma.m_suppliers.create({
      data: supplier,
    });
    return newSupplier 
  }

  async updateSupplier(id: number, supplier: ISupplier) {
    const updatedSupplier = await this.prisma.m_suppliers.update({
      where: { id },
      data: supplier,
    });
    return updatedSupplier 
  }

  async deleteSupplier(id: number) {
    const deletedSupplier = await this.prisma.m_suppliers.update({
      where: { id },
      data: { del_flg: 1 },
    });
    return deletedSupplier 
  }

  async createMemo(memo: IMemo) {
    const newMemo = await this.prisma.t_supplier_memos.create({
      data: memo,
    });
    return newMemo;
  }
}


export default SupplierRepository;
