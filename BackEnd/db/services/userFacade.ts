// services/userFacade.ts

import { createUser, getName, getUsers } from "../lib/userLib";
import { UserRepository } from "../repository/userRepository";

export const addUser = async (firstName: string, lastName: string, age: number) => {
  return await createUser(firstName, lastName, age);
};

export const fetchUsers = async () => {
  return await getUsers();
};


export const name = async (id: number) => {
  return await getName(id);
}

export const otherwayName = async (id: number) => {
  let user = new UserRepository();
  return await user.getName(id);
}

