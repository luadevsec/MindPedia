import { useState, useEffect, useCallback } from 'react';

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void;
};

interface useApiProps {
    endpoint: string;
    url?: string;
    options?: RequestInit;
    }

function useApi<T>({ endpoint, url, options }: useApiProps): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  url = url || `http://localhost:8080`;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url.concat(endpoint), options);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, options, endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
}

export default useApi;


// pequeno codigo de exemplo de uso

/*
import React from 'react';

const ApiComponent: React.FC = () => {
    const { data, error, loading, refetch } = useApi<any>({ 
    endpoint: '/posts' 
    });

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div>
            <h1>Dados da API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={refetch}>Atualizar Dados</button>
        </div>
    );
}; */
