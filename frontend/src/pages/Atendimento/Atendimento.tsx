import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";
import { Pmock } from "../../contexts/pacienteMock";
import { useFetchWithParams } from "../../hooks/useFeach";
import { Paciente } from "../../contexts/pacienteTypes";

const Atendimento = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const [paciente, setPaciente] = useState<Paciente>(Pmock); // Estado para armazenar os dados do paciente

  const { data, error, loading, refetch } = useFetchWithParams<Paciente, { id: string }>(
    "/paciente",
    id ? { id } : undefined // Passa o ID como parâmetro
  );

  useEffect(() => {
    document.title = "Atendimento do Paciente";

    if (id === "mock") {
      setPaciente(Pmock); // Utiliza dados mock caso o ID seja "mock"
    } else if (data) {
      setPaciente(data); // Atualiza os dados da API quando disponíveis
    }
  }, [id, data]);

  if (id !== "mock") {
    if (loading) {
      return <p>Carregando dados...</p>; // Feedback de carregamento
    }

    if (error) {
      return (
        <p>
          Ocorreu um erro ao carregar os dados: {error}{" "}
          <button onClick={refetch}>Tentar novamente</button>
        </p>
      ); // Exibe erro e botão para refazer a busca
    }

    if (!paciente) {
      return <p>Nenhum dado disponível.</p>; // Caso nenhum dado esteja disponível
    }
  }

  return (
    <div>
      {/* Passa os dados para os componentes */}
      <Header paciente={paciente} />
      <Main idPaciente={paciente.id} />
    </div>
  );
};

export default Atendimento;
