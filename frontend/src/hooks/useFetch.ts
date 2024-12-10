import { useState, useCallback } from "react";
import axios, { Method, AxiosRequestConfig } from "axios";
import { backendUrl } from "./env"; // Importa o backendUrl

// Tipagem para os parâmetros de configuração da requisição e a resposta
interface UseFetchProps<Req> {
  config: {
    endpoint: string;
    method: Method;
  };
  req?: Req;  // Tipagem do corpo da requisição
}

const useFetch = <Req, Res>({ config, req }: UseFetchProps<Req>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Res | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null); // Limpa os dados anteriores antes de iniciar a requisição

    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: `${backendUrl}${config.endpoint}`,
        data: req,
      };

      const response = await axios(axiosConfig);
      setData(response.data as Res);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response?.data?.message || "Erro desconhecido no servidor.");
      } else {
        setError("Erro desconhecido. Verifique sua conexão.");
      }
    } finally {
      setLoading(false);
    }
  }, [config.endpoint, config.method, req]);

  return { loading, data, error, fetchData };
};

export default useFetch;
