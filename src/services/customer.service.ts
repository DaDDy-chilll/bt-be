import Customer from "../models/customer.class";
import { CustomerRepository } from "../repositories/customer.repository";
import { ICustomer } from "../instances/customer/customer.instance";
export class CustomerService {
  private customerRepository = new CustomerRepository();

  async getCustomerById(id: number) {
    console.log(id);
    return await this.customerRepository.getCustomerById(id);
  }

  async getAllCustomers(page: number, limit: number, filters: any) {
    console.log(filters);
    return await this.customerRepository.getAllCustomers(page, limit, filters);
  }

  async createCustomer(customer: ICustomer) {
    return await this.customerRepository.createCustomer(customer);
  }

  async updateCustomer(customer: ICustomer, id: number) {
    return await this.customerRepository.updateCustomer(customer, id);
  }

  async deleteCustomer(id: number) {
    return await this.customerRepository.deleteCustomer(id);
  }
}
