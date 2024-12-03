import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Agendamento } from "./agendamentoModel"; // Importando o modelo Agendamento

@Entity()
export class User {

  @Column({ primary: true })
  id!: string;

  @Column({ nullable: true })
  nome!: string;

  @Column({ nullable: true })
  cpf!: string;

  @Column({ nullable: true })
  dataNascimento!: Date;

  @Column({ nullable: true })
  idFoto!: number;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  profissao!: string;

  @Column({ nullable: true })
  sexualidade!: number;

  @Column({ nullable: true })
  genero!: number;

  @Column({ nullable: true })
  numero!: string;

  @Column({ nullable: true })
  numeroAux!: string;

  @Column({ nullable: true })
  estadoCivil!: number;

  @OneToOne(() => Agendamento, { nullable: true })
  @JoinColumn()
  agendamento?: Agendamento; // Relacionamento 1 para 1 com Agendamento
}
