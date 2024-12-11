import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFichaService from "../services/useFichaService";
import Mock from "./useMock";
import { Carga } from "./typeMock";
import { Method } from "axios";

const useFicha = () => {
  const [carga, setCarga] = useState<Carga>(Mock); // Estado para armazenar os dados da carga
  const [id] = useState<string>(useParams<{ id: string }>().id || "Mock"); // Estado para armazenar o ID

  const { data, error, loading, fetchData, sendData} = useFichaService({ id }); // Hook para buscar os dados da API

  useEffect(() => {
    document.title = "Ficha do Paciente";
    console.log("Estamos na ficha com o id", id);
    console.error(error);

    if (id === "mock") {
      setCarga(Mock); // Utiliza dados mock caso o ID seja "mock"
    } else if (!data && !loading) {
      // Adiciona um delay de 1 segundo antes de chamar o fetchData
      console.log("Aguardando 1 segundo antes de buscar os dados...");
      console.error(error);
      const timeout = setTimeout(async () => {
        console.log("Fetching data...");
        await sendData({
          req: { id: '7e0ec267-0030-4606-bc6d-fadef68235f1' },
          config: {
              endpoint: "example/ficha",
              method: "POST" as Method,
          }
      })
        console.error(error);
      }, 1000); // Delay de 1 segundo

      // Limpa o timeout se o componente for desmontado ou se o ID mudar
      return () => clearTimeout(timeout);
    } else if (data) {
      console.log(`Data fetched: ${JSON.stringify(data)}`);
      setCarga(data); // Atualiza com os dados recebidos
    }
  }, [id, data, fetchData, loading, error, sendData]); // Inclui loading como dependência para garantir que o efeito não rode enquanto carrega

  return { id, carga, error, loading, refetch: fetchData };
};

export default useFicha;
