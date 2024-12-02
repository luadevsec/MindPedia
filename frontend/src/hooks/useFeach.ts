import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { backendUrl } from './env'; // Certifique-se de que isso aponta para a URL base correta do backend

// Função para gerar a URL completa
const getFullUrl = (url: string) => `${backendUrl}${url.startsWith('/') ? url : `/${url}`}`;

// 1. Busca com retorno
export const useFetchWithParams = <T, P>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<T>(getFullUrl(url), { ...config, params });
      setData(response.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, params, config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
};

// 2. Retorno puro
export const useFetch = <T>(
  url: string,
  config?: AxiosRequestConfig
) => {
  const { data, error, loading, refetch } = useFetchWithParams<T, undefined>(
    url,
    undefined,
    config
  );
  return { data, error, loading, refetch };
};

// 3. Sinal de envio
export const useSendSignal = <P>(
  url: string,
  config?: AxiosRequestConfig
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendSignal = useCallback(async (payload: P) => {
    setLoading(true);
    try {
      await axios.post(getFullUrl(url), payload, config);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, config]);

  return { sendSignal, loading, error };
};

// 4. Sinal de envio e retorno
export const useSendAndFetch = <T, P>(
  url: string,
  config?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendAndFetch = useCallback(async (payload: P) => {
    setLoading(true);
    try {
      const response = await axios.post<T>(getFullUrl(url), payload, config);
      setData(response.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, config]);

  return { data, error, loading, sendAndFetch };
};
