import { UserRepository } from "../repositories/user.repository";
import User from "../models/user.class";
import { CreateUserInstance } from "../instances/user/create.instance";
import { helper } from "../common/helper";
import { UpdateUserInstance } from "../instances/user/update.instance";
export class UserService {
  private userRepository = new UserRepository();

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(+id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
  async createUser(data: CreateUserInstance): Promise<User> {
    const hashedPassword = await helper.hashPassword(data.password);
    return this.userRepository.create({ ...data, password: hashedPassword });
  }

  async updateOtpCode(id: number, otp_code: string): Promise<User> {
    return this.userRepository.updateOtpCode(id, otp_code);
  }

  async updatePassword(id: number, password: string): Promise<User> {
    return this.userRepository.updatePassword(id, password);
  }
}
