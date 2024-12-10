// components/Menu.tsx
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import ContatoCard from "./components/contatoCard";
import Calendario from "./components/calendario";
import CardAtual from "./components/cardAtual";
import { useMenu } from "./hooks/useMenu";

const Menu = () => {
  // Usando o hook personalizado
  const { contatogeralmock, contatoAtual, handleContatoClick } = useMenu();

  return (
    <>
      <Header />
      <Container fluid style={{ height: "87vh" }}>
        <Row className="h-100">
          {/* Coluna para o Card */}
          <Col md={3} className="d-flex justify-content-center align-items-center bg-danger-subtle">
            <CardAtual contato={contatoAtual} />
          </Col>

          {/* Coluna para o Calendário */}
          <Col md={6} className="d-flex justify-content-center align-items-center bg-black">
            <Calendario />
          </Col>

          {/* Coluna para os Contatos */}
          <Col md={3} className="justify-content-center align-items-center bg-info">
            <div style={{ height: "83vh", overflowY: "auto" }}>
              {/* Mapeia os contatos para permitir seleção */}
              {contatogeralmock.map((contato) => (
                <ContatoCard
                  contato={contato}
                  key={contato.id}
                  onClick={() => handleContatoClick(contato)} // Chama a função ao clicar no contato
                />
              ))}
            </div>
            <Button href="/cadastro" variant="primary" className="w-100">
              Cadastrar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
