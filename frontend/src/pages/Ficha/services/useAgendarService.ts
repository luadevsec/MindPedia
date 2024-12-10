import { Method } from "axios";
import useFetch from "../../../hooks/useFetch";

interface Res {
    message: string;
}

interface Req {
    agendamento: string;
    id: string;
}

const useAgendarService = (req: Req) => {
    const config = {
        endpoint: "/example/agendar",
        method: "POST" as Method,
    };

    return useFetch<Req, Res>({ config, req });
}

export default useAgendarService;