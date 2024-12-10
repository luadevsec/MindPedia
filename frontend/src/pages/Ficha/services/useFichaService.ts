import { Method } from "axios";
import useFetch from "../../../hooks/useFetch";
import { Agendamento, Historico } from "../hooks/typeMock";
import { Paciente } from "../../../contexts/paciente";

interface Res {
    paciente: Paciente;
    historico: Historico;
    agendamento: Agendamento;
}

interface Req {
    id: string;
}

const usePacienteService = (req: Req) => {
    const config = {
        endpoint: "/paciente",
        method: "GET" as Method,
        
    };

    return useFetch<Req, Res>({ config, req });
}

export default usePacienteService;