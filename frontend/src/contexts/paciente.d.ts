type Paciente = {
    id: string;
    nome: string;
    genero: string;
    sexualidade: string;
    etnia: string;
    estadoCivil: string;
    dataNascimento: string;
    naturalidade: string;
    nacionalidade: string;
    foto: string;
    rg: string;
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

type Resumo = {
    data: string;
    conteudo: string;
}

type Consulta = {
    data: string;
    resumo: string | Resumo | null;
    notas: string | Nota | null;
}

type Nota = {
    data: string;
    conteudo: string;
}


type Agendamento = {
    data: string;
    hora: string;
}

export type { Paciente, Resumo, Consulta, Nota, Agendamento };