// services/pacienteService.ts
import { Method } from "axios";
import useFetch from "../../../hooks/useFetch";
import { Paciente } from "../../../contexts/paciente";


interface Req {
    id: string;
}
interface Res {
    paciente: Paciente;
}

// Função para buscar dados do paciente
export const FetchPaciente = (id: string) => {
    const config = {
        endpoint: "/consulta/busca",
        method: "POST" as Method,
    };
    return useFetch<Req, Res>({ config, req: {  id } });
};
