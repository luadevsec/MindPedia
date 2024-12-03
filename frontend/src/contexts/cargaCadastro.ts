

type PacienteCadastral = {
    nome: string;
    genero: string;
    sexualidade: string;
    etnia: string;
    estadoCivil: string;
    dataNascimento: string;
    naturalidade: string;
    nacionalidade: string;
    foto: string;
    cpf: string;
    profissao: string;
    email: string;
    telefone: string;
    hobby: string[];
    contatoEmergencia: {
        nome: string;
        parentesco: string;
        telefone: string;
    };
};
type cargaCadastro = {
    paciente: PacienteCadastral;
};
export type { cargaCadastro };