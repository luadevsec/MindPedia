import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useMain } from "../hooks/useMain";

interface MainProps {
  idPaciente: string;
}

const Main = ({ idPaciente }: MainProps) => {
  const {
    resumo,
    setResumo,
    nota,
    setNota,
    loading,
    handleFinalizar,
    handleCancelar,
  } = useMain({ idPaciente });

  return (
    <Container
      fluid
      className="p-4"
      style={{
        backgroundColor: "#070D44", // Fundo principal
        color: "#AFEFFD", // Texto
        minHeight: "76vh", // Ocupa toda a tela
      }}
    >
      {/* Título */}
      <Container className="mb-4 text-center">
        <h1 style={{ color: "#EC7105" }}>Atendimento</h1>
        <p style={{ color: "#AFEFFD" }}>
          Gerencie informações sobre o atendimento de forma clara e organizada.
        </p>
      </Container>

      {/* Formulário */}
      <Container>
        <Form>
          {/* Resumo */}
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="formResumo">
                <Form.Label style={{ color: "#EC7105" }}>Resumo da Sessão</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  maxLength={800}
                  placeholder="Escreva o resumo aqui (máximo de 8 linhas)..."
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                  style={{
                    backgroundColor: "#AFEFFD",
                    color: "#070D44",
                    border: "2px solid #EC7105",
                    borderRadius: "6px",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Notas e Texto Temporário */}
          <Row className="mb-4">
            {/* Notas */}
            <Col md={6}>
              <Form.Group controlId="formNotas">
                <Form.Label style={{ color: "#EC7105" }}>Notas</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  maxLength={500}
                  placeholder="Adicione notas aqui (máximo de 5 linhas)..."
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                  style={{
                    backgroundColor: "#AFEFFD",
                    color: "#070D44",
                    border: "2px solid #EC7105",
                    borderRadius: "6px",
                  }}
                />
              </Form.Group>
            </Col>

            {/* Texto Temporário */}
            <Col md={6}>
              <Form.Group controlId="formTemporario">
                <Form.Label style={{ color: "#EC7105" }}>Texto Temporário</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Texto temporário (sem limite de linhas ou caracteres)..."
                  style={{
                    backgroundColor: "#024CAA",
                    color: "#AFEFFD",
                    border: "2px solid #EC7105",
                    borderRadius: "6px",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Botões de ação */}
      <Container className="text-center mt-4">
        <Row>
          <Col md={6}>
            <Button
              variant="outline-danger"
              onClick={handleCancelar}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "#EC7105",
                border: "2px solid #EC7105",
              }}
            >
              Cancelar
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="outline-success"
              onClick={handleFinalizar}
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: loading ? "#AFEFFD" : "#024CAA",
                color: "#AFEFFD",
                border: "2px solid #AFEFFD",
              }}
            >
              {loading ? "Enviando..." : "Finalizar"}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Main;
