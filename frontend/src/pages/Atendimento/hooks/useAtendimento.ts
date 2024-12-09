import { useState, useEffect } from "react";
import { FetchPaciente } from "../services/pacienteService";
import { Pmock } from "../../../contexts/pacienteMock";
import { Paciente } from "../../../contexts/paciente";

// Hook para usar o paciente
export const useAtendimento = (id: string | undefined) => {
  const [paciente, setPaciente] = useState<Paciente | null>(null); // Inicializa como null

  if (!id) {
    throw new Error("ID não informado.");
  }

  const { data, error, loading, fetchData } = FetchPaciente(id); // Chama o serviço para buscar dados do paciente

  useEffect(() => {
    if (!id) {
      throw new Error("ID não informado.");
    }

    // Se o ID for "mock", carrega os dados mock
    if (id === "mock") {
      setPaciente(Pmock);
    } 
    // Caso contrário, executa o fetch para buscar os dados reais
    else {
      fetchData(); // Chama a função para disparar a requisição
    }
  }, [id, fetchData]);

  // Atualiza o estado do paciente quando os dados forem carregados
  useEffect(() => {
    if (data) {
      setPaciente(data.paciente);
    }
  }, [data]);

  return { paciente, error, loading, refetch: fetchData };
};
