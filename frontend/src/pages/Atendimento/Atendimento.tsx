// pages/Atendimento/Atendimento.tsx
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";
import { useAtendimento } from "./hooks/useAtendimento";

const Atendimento = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const { paciente, error, loading, refetch } = useAtendimento(id); // Busca os dados do paciente

  if (!id) {
    return <p>ID não informado.</p>; // Caso o ID não seja informado
  }

  if (!paciente) {
    return <p>Nenhum dado disponível.</p>; // Caso nenhum dado esteja disponível
  }

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
      <Main idPaciente={id} />
    </div>
  );
};

export default Atendimento;
