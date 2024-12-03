import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./userModel";

@Entity()
export class Consulta {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data!: string;

    @Column({ type: 'text', nullable: true })
    resumo!: string | null;

    @Column({ type: 'text', nullable: true })
    notas!: string | null;

    @ManyToOne(() => User, user => user.consulta)
    @Column({nullable: false})
    id_paciente!: string;
}
