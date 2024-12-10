import { Method } from "axios";
import { useFetch } from "../../../hooks/useFeach";
import useDate from "../../../utils/useDate";

interface Req {
    password: string;

}


interface Res {
    paciente: {
        id: string;
        nome: string;
        agendamento: string;
    }[];
}

interface contato {
    id: string;
    nome: string;
    agendamento: string;
    today: boolean;

}

const useContatoAllService = (req: null) => {
    const config = {
        endpoint: "/example/contato",
        method: "GET" as Method,
    };

    pacientes : contato = {}


    return useFetch<Req, Res>({ config, req });
}

export default useContatoAllService;