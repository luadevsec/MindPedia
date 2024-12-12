import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import ContatoCard from "./components/contatoCard";
import Calendario from "./components/calendario";
import CardAtual from "./components/cardAtual";
import useMenuAxios from "./hooks/useMenuAxios";

const Menu = () => {
  const { contatos, contatoAtual, handleContatoClick, unicDays } = useMenuAxios();
  
  return (
    <>
      <Header />
      <Container fluid style={{ height: "87vh", backgroundColor: '#070D44' }}>
        <Row className="h-100">
          {/* Card Atual */}
          <Col
            md={3}
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundColor: '#070D44' }}
          >
            <CardAtual contato={contatoAtual} />
          </Col>

          {/* Calendário */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundColor: '#070D44' }}
          >
            <Calendario days={unicDays} />
          </Col>

          {/* Lista de Contatos */}
          <Col
            md={3}
            className="justify-content-center align-items-center"
            style={{ backgroundColor: '  #024CAA' }}
          >
            <div style={{ height: "83vh", overflowY: "auto" }}>
              {Array.isArray(contatos) ? (
                contatos.map((contato) => (
                  <ContatoCard
                    contato={contato}
                    key={contato.id}
                    onClick={() => handleContatoClick(contato)}
                  />
                ))
              ) : (
                <p style={{ color: '#AFEFFD' }}>Nenhum contato cadastrado</p>
              )}
            </div>
            <Button
              href="/cadastro"
              style={{
                backgroundColor: '#EC7105',
                borderColor: ' #AFEFFD',
                color: '#070D44',
              }}
              className="w-100"
            >
              Cadastrar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
