import { Paciente, PacienteFichado } from "../../../contexts/paciente";

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
    resumos: string[];
    consultas: Consulta[];
    notas: string[];
}


type Agendamento = {
    data: string;
    hora: string;
}


type Carga = {
    paciente : PacienteFichado;
    historico: Historico;
}



export type { Paciente, Resumo, Consulta, Nota, Carga, Historico, Agendamento };