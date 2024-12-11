import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { backendUrl } from "./env";
import UseFetchProps from "./fetchProps";

const useFetch = <Req, Res>({ config, req }: UseFetchProps<Req>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Res | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: `${backendUrl}${config.endpoint}`,
        data: req,
      };

      const response = await axios(axiosConfig);
      setData(response.data as Res);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
          const { status, data } = axiosError.response;
          // Verificando se a resposta contém uma mensagem de erro
          const errorMessage = data && typeof data === 'object' && 'message' in data ? (data as { message: string }).message : "Erro desconhecido no servidor.";
          setError(`Erro ${status}: ${errorMessage}`);
        } else {
          setError(`Erro de rede: ${axiosError.message}`);
        }
      } else {
        setError("Erro desconhecido. Verifique sua conexão.");
      }
    } finally {
      setLoading(false);
    }
  }, [config, req]);

  // Função para enviar dados dinâmicos
  const sendData = useCallback(
    async (newConfig: UseFetchProps<Req>) => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const axiosConfig: AxiosRequestConfig = {
          method: newConfig.config.method,
          url: `${backendUrl}${newConfig.config.endpoint}`,
          data: newConfig.req,
        };

        const response = await axios(axiosConfig);
        setData(response.data as Res);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;

          if (axiosError.response) {
            const { status, data } = axiosError.response;
            const errorMessage = data && typeof data === 'object' && 'message' in data ? (data as { message: string }).message : "Erro desconhecido no servidor.";
            setError(`Erro ${status}: ${errorMessage}`);
          } else {
            setError(`Erro de rede: ${axiosError.message}`);
          }
        } else {
          setError("Erro desconhecido. Verifique sua conexão.");
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, data, error, fetchData, sendData };
};

export default useFetch;
