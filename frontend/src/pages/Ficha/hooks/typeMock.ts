type Paciente = {
    id: string;
    nome: string;
    genero: string;
    sexualidade: string;
    pronome: string;
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

type Historico = {
    resumo: Resumo[];
    consultas: Consulta[];
    notas: Nota[];
}


type Agendamento = {
    data: string;
    hora: string;
}


type Carga = {
    paciente : Paciente;
    historico: Historico;
    agendamento: Agendamento | null;
}


export type { Paciente, Resumo, Consulta, Nota, Carga, Historico, Agendamento };