import { Entity, Column } from "typeorm";

@Entity()
export class User {

  @Column({ primary: true })
  id!: string;

  @Column()
  nome!: string;
  
  @Column()
  cpf!: string;

  @Column()
  idFoto!: number;

  @Column()
  email!: string;

  @Column()
  profissao!: string;

  @Column()
  dataNascimento!: Date;
}

/*id: a34f573e-8959-4c52-9592-e66e10b9cf60;    //mudar para uuid7 pra melhorar a eficiencia do banco
nome: Sophia Souza;
cpf: 345.743.699-72;
dataNascimento: 1988-4-12;
sexualidade: Bissexual;
genero: Outro;
numero: (66) 94079-2126;
numeroAux: (77) 4248-9539;
email: alice.alves@examplo.com;
estadoCivil: Casado(a);
profissao: Advogado(a);
etnia: Branca;
hobby: Viagens;
*/