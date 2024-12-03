/*import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Consulta } from "./consultaModel";

@Entity()
export class Nota {
  @PrimaryColumn({type: "timestamp"})
  consulta_timestamp!: Date;

  @PrimaryColumn()
  id_cliente!: string;

  @PrimaryGeneratedColumn()
  num_nota!: number;

  @Column()
  nota!: string;

  @ManyToOne(() => Consulta)
  @JoinColumn([
    { name: "id_cliente", referencedColumnName: "id_cliente" },
    { name: "consulta_timestamp", referencedColumnName: "timestamp" }
  ])
  consulta!: Consulta;
}
*/