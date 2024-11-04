import { UserRepository } from "../repositories/user.repository";
import User from "../models/user.class";
import { CreateUserInstance } from "../instances/user/create.instance";
import { helper } from "../common/helper";
export class UserService {
  private userRepository = new UserRepository();

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(+id);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findByUsername(username);
  }
  async createUser(data: CreateUserInstance): Promise<User> {
    const hashedPassword = await helper.hashPassword(data.password);
    return this.userRepository.create({ ...data, password: hashedPassword });
  }
}
