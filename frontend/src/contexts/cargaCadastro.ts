type cargaCadastro = {
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

export type { cargaCadastro };