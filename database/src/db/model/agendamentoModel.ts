import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./userModel"; // Importando o modelo User

@Entity()
export class Agendamento {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: string;

  @Column()
  hora!: string;

  @OneToOne(() => User, (user : User) => user.agendamento) // Relacionamento 1 para 1
  @JoinColumn() // A chave estrangeira será gerada automaticamente
  paciente!: User;
}
