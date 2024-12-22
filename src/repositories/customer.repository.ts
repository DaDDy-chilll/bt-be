import { PrismaClient } from "@prisma/client";
import OrderCategory from "../models/order_category.class";
import Customer from "../models/customer.class";
import { Prisma } from "@prisma/client";
import { ICustomer } from "../instances/customer/customer.instance";

export class CustomerRepository {
  private prisma = new PrismaClient();

  async getCustomerById(id: number) {
    const customer = await this.prisma.m_customers.findUnique({
      where: {
        id: id,
      },
    });

    return new Customer(customer as Customer);
  }

  async getAllCustomers(page: number, limit: number, filters: any) {
    const where: Prisma.m_customersWhereInput = {
      del_flg: 0,
    };

    if (Object.keys(filters).length > 0) {
      if (filters.first_name) {
        where.first_name = {
          contains: filters.first_name,
        };
      }

      if (filters.last_name) {
        where.last_name = {
          contains: filters.last_name,
        };
      }

      if (filters.email) {
        where.email = {
          contains: filters.email,
        };
      }

      if (filters.status) {
        where.status = filters.status;
      }

      if (filters.level_id) {
        where.level_id = filters.level_id;
      }

      if (filters.nrc) {
        where.nrc = {
          contains: filters.nrc,
        };
      }
    }

    const customers = await this.prisma.m_customers.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where,
      include: {
        m_levels: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return customers.map((customer) => new Customer(customer as Customer));
  }
  async createCustomer(customer: ICustomer) {
    const newCustomer = await this.prisma.m_customers.create({
      data: customer,
    });
    return newCustomer;
  }

  async updateCustomer(customer: ICustomer, id: number) {
    const updatedCustomer = await this.prisma.m_customers.update({
      where: { id: id },
      data: customer,
    });
    return updatedCustomer;
  }

  async deleteCustomer(id: number) {
    const deletedCustomer = await this.prisma.m_customers.update({
      where: { id: id },
      data: { del_flg: 1 },
    });
    return deletedCustomer;
  }
}
