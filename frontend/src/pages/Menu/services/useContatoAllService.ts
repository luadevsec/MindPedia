import { Method } from "axios";
import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Contato from "./contato";

interface Res {
  paciente: Contato[];
}

interface Req {
  password: string;
}

const useContatoAllService = () => {
  const config = {
    endpoint: "/user/all",
    method: "POST" as Method,
  };

  const [contatos, setContatos] = useState<Contato[]>([]);
  const req = { password: "claroMovel" };
  const { data, error, sendData, loading, fetchData } = useFetch<Req, Res>({
    config,
    req,
  });

  // Atualizar contatos apenas quando data for alterado
  useEffect(() => {
    if (data) {
      setContatos(data.paciente);
    }
  }, [data]);

  return { contatos, error, sendData, loading, fetchData };
};

export default useContatoAllService;
