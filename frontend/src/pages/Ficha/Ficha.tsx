import { Row, Col } from "react-bootstrap";
import Header from "./components/header";
import Main from "./components/main";
import useFicha from "./hooks/useFicha";

const Ficha = () => {
  const { id, carga, error, loading, refetch } = useFicha();

  if (id !== "mock") {
    if (loading) {
      return <p>Carregando dados...</p>;
    }

    if (error) {
      return (
        <p>
          Ocorreu um erro ao carregar os dados: {error}{" "}
          <button onClick={refetch}>Tentar novamente</button>
        </p>
      );
    }

    if (!carga) {
      return <p>Nenhum dado disponível.</p>;
    }
  }

  const { paciente, historico, agendamento } = carga;

  return (
    <div>
      <Header foto={paciente.foto} nome={paciente.nome} />
      <Main paciente={paciente} historico={historico} agendamento={agendamento} />

      <Row className="bg-dark text-white p-3">
        <Col className="text-center">
          <p>© 2022-2024 Mindpedia. Todos os direitos reservados.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Ficha;
