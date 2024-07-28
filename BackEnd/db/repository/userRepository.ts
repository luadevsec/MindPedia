// repository/userRepository.ts

import { Repository } from "typeorm";
import { AppDataSource } from "../model/dataSource";
import { User } from "../model/user";

export class UserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createUser(firstName: string, lastName: string, age: number): Promise<User> {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    return await this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getName(id: number): Promise<string> {
    const user = await this.userRepository.findOne(id);
    return `${user.firstName} ${user.lastName}`;
  }
}