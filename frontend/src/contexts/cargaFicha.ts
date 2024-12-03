import { Paciente } from "./pacienteTypes";

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


type CargaFicha = {
    paciente : Paciente;
    historico: Historico;
    agendamento: Agendamento | null;
}


export type { CargaFicha };