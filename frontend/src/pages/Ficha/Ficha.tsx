import { Row, Col } from "react-bootstrap";
import Header from "./components/header";
import Main from "./components/main";
import useFicha from "./hooks/useFicha";

const Ficha = () => {
  /*
  
    paciente,
    handleMock,
    handleFetch,
    id,
    agendamento, setAgendamento, 
    historico
  */
  const { paciente, historico, agendamento, setAgendamento, id, handleFetch, handleMock } = useFicha();



  return (
    <div>
      {
        paciente && (
          <>
            <Header foto={paciente.idFoto} nome={paciente.nome} />
            <Main paciente={paciente} historico={historico} agendamento={agendamento} id={id} />
          </>
          
        )

      }

      <Row className="bg-dark text-white p-3">
        <Col className="text-center">
          <p>© 2022-2024 Mindpedia. Todos os direitos reservados.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Ficha;
