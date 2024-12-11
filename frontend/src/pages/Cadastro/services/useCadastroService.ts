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
  const {data, error, sendData, loading, fetchData} = useFetch<Req, Res>({
    config: {
      method: "POST" as Method,
      endpoint: "/user/add",
    },
    req,
  });

  console.log(error);
  return {data, error, sendData, loading, fetchData};
};
