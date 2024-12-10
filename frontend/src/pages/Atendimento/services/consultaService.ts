import useFetch from "../../../hooks/useFetch";
import { Method } from "axios";
import { Consulta } from "../../../contexts/paciente";

interface Req {
    consulta: Consulta;
}
interface Res {
    message: string;
}


const useConsultaService  = (req : Req) => {
    const config = {
        endpoint: "/consulta/add",
        method: "POST" as Method,
    };
    return useFetch<Req, Res>({ config, req });
}

export { useConsultaService  };