import { CustomerRepository } from "../repositories/customer.repository";

export class CustomerService {
  private customerRepository = new CustomerRepository();

  async getCustomerById(id: number) {
    console.log(id);
    return await this.customerRepository.getCustomerById(id);
  }
}
