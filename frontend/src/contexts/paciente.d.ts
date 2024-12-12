import { Historico } from "../pages/Ficha/hooks/typeMock";


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
    idFoto: string;
    profissao: string;
    email: string;
    telefone: string;
    contatoEmergencia: {
        nome: string;
        parentesco: string;
        telefone: string;
    };
    agendamento : string | null;
};

type Resumo = {
    data: string;
    conteudo: string;
}


type Consulta = {
    id_paciente: string;
    data: string;
    resumo: string | Resumo | null;
    nota: string | Nota | null;
}

type Nota = {
    data: string;
    conteudo: string;
}


type Agendamento = {
    data: string;
    hora: string;
}

type CargaModel = {
    paciente :{
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
        profissao: string;
        email: string;
        telefone: string;
        contatoEmergencia: {
            nome: string;
            parentesco: string;
            telefone: string;
        };
    },
    historico: {
        resumos: string[]
        notas: string[]
        consultas: {
            data: string;
            resumo: string | null;
            notas: string | null;
        }[]
    },
    agendamento: string | null;
}


interface PacienteFichado {
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
    profissao: string;
    email: string;
    telefone: string;
    contatoEmergencia: {
        nome: string;
        parentesco: string;
        telefone: string;
    };
    agendamento : string | null;
}

interface cargaFicha {
    paciente : PacienteFichado;
    historico : Historico;
    }

export type { Paciente, Resumo, Consulta, Nota, Agendamento, CargaModel, PacienteFichado, cargaFicha };