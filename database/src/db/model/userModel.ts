import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"; // Importando os decoradores do TypeORM
import { Agendamento } from "./agendamentoModel"; // Importando o modelo Agendamento
import { Consulta } from "./consultaModel";
import { ContatoEmergencia } from "./contatoEmergenciaModel";

@Entity()
export class User {

  @Column({ primary: true })
  id!: string;

  @Column({nullable: false})
  nome!: string;
  
  @Column({nullable: false})
  genero!: string;
  
  @Column({nullable: true})
  sexualidade!: string;

  @Column({nullable: true})
  etnia!: string;
  
  @Column({nullable: false})
  estadoCivil!: string;
  
  @Column({nullable: false})
  dataNascimento!: Date;

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
  
  @Column({nullable: false})
  telefone!: string;
  
  @OneToMany(() => Consulta, (consulta: Consulta) => consulta.paciente)
  consulta!: Consulta[];
  

  @OneToOne(() => ContatoEmergencia, (contatoEmergencia) => contatoEmergencia.user, { cascade: true, eager: true })
  @JoinColumn()
  contatoEmergencia!: ContatoEmergencia;

  @OneToOne(() => Agendamento, { nullable: true })
  @JoinColumn()
  agendamento?: Agendamento; // Relacionamento 1 para 1 com Agendamento

}
