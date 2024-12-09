import { Row, Col } from "react-bootstrap";
import Header from "./components/header";
import Main from "./components/main";
import { useEffect, useState } from "react";
import { useFetchWithParams } from "../../hooks/useFeach";
import { Carga } from "./hooks/typeMock";
import { useParams } from "react-router-dom";
import Mock from "./hooks/useMock";

function Ficha() {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const [carga, setCarga] = useState<Carga>(Mock) // Estado para armazenar os dados da carga

  const { data, error, loading, refetch } = useFetchWithParams<Carga, { id: string }>(
    "/carga",
    id ? { id } : undefined // Passa o ID como parâmetro
  );

  useEffect(() => {
    document.title = "Ficha do Paciente";
    console.log('estamos na ficha')

    if (id == "mock") {
      setCarga(Mock); // Utiliza dados mock caso o ID
    } else {
      if (data) setCarga(data); // Atualiza os dados da API quando disponíveis
    }
  }, [id, data]);

  if (id != 'mock'){
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
  
    if (!carga) {
      return <p>Nenhum dado disponível.</p>; // Caso nenhum dado esteja disponível
    }
  
  }
  
  const { paciente, historico, agendamento} = carga!; // Destruturação dos dados

  return (
    <div>
      {/* Passa os dados para os componentes */}
      <Header foto={paciente.foto} nome={paciente.nome} />
      <Main paciente={paciente} historico={historico} agendamento={agendamento} />

      <Row className="bg-dark text-white p-3">
        <Col className="text-center">
          <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </Col>
      </Row>
    </div>
  );
}

export default Ficha;
