import useFetch from "../../../hooks/useFetch";
import { Method } from "axios";
import { Consulta } from "../../../contexts/paciente";

interface Req {
    id: string;
    consulta: Consulta;
}
interface Res {
    message: string;
}


const useConsultaService  = (req : Req) => {
    const config = {
        endpoint: "/consulta",
        method: "POST" as Method,
    };
    return useFetch<Req, Res>({ config, req });
}

export { useConsultaService  };