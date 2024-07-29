// services/userFacade.ts

import { UserRepository } from "../repository/userRepository";

export const addUser = async (nome:string, cpf:string, dataNascimento:Date, idFoto:number, email:string, profissao:string) => {
  return await UserRepository.createUser(nome, cpf, dataNascimento, idFoto, email, profissao);
};

/*export const fetchUsers = async () => {
  return await getUsers();
};


export const name = async (id: number) => {
  return await getName(id);
}

export const otherwayName = async (id: number) => {
  let user = new UserRepository();
  return await user.getName(id);
}*/

