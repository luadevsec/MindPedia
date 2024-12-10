import { Method } from "axios";
import { PacienteCadastral } from "../../../contexts/cargaCadastro";
import useFetch from "../../../hooks/useFetch";

interface Req {
  paciente: PacienteCadastral;
}

interface Res {
  id: string;
}

export const useCadastroService = (req: Req) => {
  return useFetch<Req, Res>({
    config: {
      method: "POST" as Method,
      endpoint: "/user/add",
    },
    req,
  });
};
