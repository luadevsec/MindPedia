

type PacienteCadastral = {
    nome: string;
    genero: string;
    sexualidade: string | null;
    etnia: string | null;
    estadoCivil: string | null;
    dataNascimento: string;
    naturalidade: string | null;
    nacionalidade: string | null;
    foto: string;
    profissao: string | null;
    email: string;
    telefone: string;
    contatoEmergencia: {
        nome: string;
        parentesco: string | null;
        telefone: string;
    };
};
type cargaCadastro = {
    paciente: PacienteCadastral;
};
export type { cargaCadastro, PacienteCadastral };