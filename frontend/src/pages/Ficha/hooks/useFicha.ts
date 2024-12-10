import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFichaService from "../services/useFichaService";
import Mock from "./useMock";
import { Carga } from "./typeMock";

const useFicha = () => {
    const [carga, setCarga] = useState<Carga>(Mock); // Estado para armazenar os dados da carga
    const [id ] = useState<string>(useParams<{ id: string }>().id || 'Mock'); // Estado para armazenar o ID
    
    const { data, error, loading, fetchData } = useFichaService({ id }); // Hook para buscar os dados da API

  useEffect(() => {
    document.title = "Ficha do Paciente";
    console.log("Estamos na ficha");
    
    if (id === "mock") {
      setCarga(Mock); // Utiliza dados mock caso o ID
    } else {
        fetchData(); // Busca os dados da API
        if (data) {
            setCarga(data);
        }
    }
  }, [id, data, fetchData]);

  return { id, carga, error, loading, refetch : fetchData };
};

export default useFicha;
