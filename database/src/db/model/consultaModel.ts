import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./userModel";
import { join } from "path";

@Entity()
export class Consulta {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data!: string;

    @Column({ type: 'text', nullable: true })
    resumo!: string | null;

    @Column({ type: 'text', nullable: true })
    nota!: string | null;

    @Column({ name: "id_paciente" })
    idPaciente!: string; 

    @ManyToOne(() => User, {nullable: false})
    @JoinColumn({ name: "id_paciente" })
    paciente!: User;
}
