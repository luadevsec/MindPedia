//lib/userLib.ts

import { AppDataSource } from "../model/dataSource";
import { User } from "../model/user";

export const createUser = async (firstName: string, lastName: string, age: number): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  return await userRepository.save(user);
};

export const getUsers = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.find();
};

export const getName = async (id: number): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne(id);
  return `${user.firstName} ${user.lastName}`;
}
