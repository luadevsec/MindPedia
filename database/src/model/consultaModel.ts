import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./userModel";

@Entity()
export class Consulta{

    @Column({primary: true})
    id_consulta!: string;

    @ManyToOne(() => User, user => user.consulta)
    @Column({nullable: false})
    id_paciente!: string;
    
    @Column({nullable: true, type: "datetime"})
    inicio_consulta!: Date;
  
    @Column({nullable: true, type: "datetime"})
    fim_consulta!: Date;

    @Column({nullable: true})
    resumo!: string;
    
  }