import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
