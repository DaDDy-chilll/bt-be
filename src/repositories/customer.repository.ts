import { PrismaClient } from "@prisma/client";
import OrderCategory from "../models/order_category.class";
import Customer from "../models/customer.class";

export class CustomerRepository {
  private prisma = new PrismaClient();

  async getCustomerById(id: number) {
    const customer = await this.prisma.m_customers.findUnique({
      where: {
        id: id,
      },
    });
    console.log(customer);
    return new Customer(customer as Customer);
  }
}
