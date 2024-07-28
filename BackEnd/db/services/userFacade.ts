import { createUser, getUsers } from "../lib/userLib";

export const addUser = async (firstName: string, lastName: string, age: number) => {
  return await createUser(firstName, lastName, age);
};

export const fetchUsers = async () => {
  return await getUsers();
};
