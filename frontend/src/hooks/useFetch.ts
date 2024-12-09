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
  const [data, setData] = useState<Res | null>(null);  // Dados da resposta tipados
  const [error, setError] = useState<string | null>(null);

  // Função que faz a requisição
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: `${backendUrl}${config.endpoint}`,
        data: req, // Envia o corpo da requisição (para POST ou PUT)
      };

      const response = await axios(axiosConfig);
      setData(response.data as Res); // Atualiza os dados com a resposta tipada
    } catch (err: unknown) {
      // Verifica se o erro tem uma estrutura esperada
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response?.data?.message || "Erro desconhecido");
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  }, [config, req]);

  // Retorna o estado e a função refetch
  return { loading, data, error, fetchData };
};

export default useFetch;
