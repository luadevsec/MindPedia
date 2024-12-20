import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Consulta } from "./consultaModel";
import { ContatoEmergencia } from "./contatoEmergenciaModel";

@Entity()
export class User {

  @Column({ primary: true })
  id!: string;

  @Column({nullable: false})
  nome!: string;
  
  @Column({nullable: true})
  genero!: string;
  
  @Column({nullable: true})
  sexualidade!: string;

  @Column({nullable: true})
  etnia!: string;
  
  @Column({nullable: true})
  estadoCivil!: string;
  
  @Column({nullable: true})
  dataNascimento!: string;

  @Column({nullable: true})
  naturalidade!: string;

  @Column({nullable: true})
  nacionalidade!: string;

  @Column({nullable: true})
  idFoto!: string;
  
  @Column({nullable: true})
  profissao!: string;
  
  @Column({nullable: false})
  email!: string;
  
  @Column({nullable: true})
  telefone!: string;

  @Column({nullable: true})
  agendamento!: string;
  
  @OneToMany(() => Consulta, (consulta: Consulta) => consulta.paciente)
  consulta!: Consulta[];
  

  @OneToOne(() => ContatoEmergencia, (contatoEmergencia) => contatoEmergencia.user, { cascade: true, eager: true })
  @JoinColumn()
  contatoEmergencia!: ContatoEmergencia;

}
