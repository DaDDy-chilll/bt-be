import { UserRepository } from "../repositories/user.repository";
import { m_users } from "@prisma/client";

export class UserService {
  private userRepository = new UserRepository();

  async getUsers(): Promise<m_users[]> {
    return this.userRepository.findAll();
  }

//   async getUserById(id: number): Promise<m_users | null> {
//     return this.userRepository.findById(id);
//   }

//   async createUser(data: Partial<m_users>): Promise<m_users> {
//     return this.userRepository.create(data);
//   }
}
