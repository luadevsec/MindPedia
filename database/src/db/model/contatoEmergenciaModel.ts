import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm';
import { User } from './userModel';

@Entity()
export class ContatoEmergencia {
    @PrimaryColumn()
    userId?: string;

    @Column()
    nome!: string;

    @Column()
    parentesco!: string;

    @Column()
    telefone!: string;

    @OneToOne(() => User, (user) => user.contatoEmergencia)
    user!: User;
}