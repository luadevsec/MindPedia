// repository/userRepository.ts

import { Repository } from "typeorm";
import AppDataSource from "../dataSource";
import { User } from "../model/user";

export class UserRepository {
  static createUser(nome: string, cpf: string, dataNascimento: Date, idFoto: number, email: string, profissao: string) {
    throw new Error("Method not implemented.");
  }
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createUser(name:string, cpf:string, dataNascimento:Date, idFoto:number, email:string, profissao:string): Promise<User> {
    const user = new User();
    user.nome = name;
    user.cpf = cpf;
    user.dataNascimento = dataNascimento;
    user.idFoto = idFoto;
    user.email = email;
    user.profissao = profissao;
    return await this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /*async getName(id: number): Promise<string> {
    const user = await this.userRepository.findOne(id);
    return `${user.firstName} ${user.lastName}`;
  }*/
}