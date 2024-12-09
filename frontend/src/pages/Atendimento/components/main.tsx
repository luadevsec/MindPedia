import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useMain } from "../hooks/useMain";

interface MainProps {
  idPaciente: string;
}

const Main = ({ idPaciente }: MainProps) => {
  const {
    resumo,
    setResumo,
    notas,
    setNotas,
    loading,
    handleFinalizar,
    handleCancelar,
  } = useMain({ idPaciente });

  return (
    <Container fluid className="p-4">
      <Container>
        <Form>
          <h1>Atendimento</h1>

          {/* Resumo */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formResumo">
                <Form.Label>Resumo da Seção</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  maxLength={800}
                  placeholder="Escreva o resumo aqui (máximo de 8 linhas)..."
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Notas e Temporário */}
          <Row>
            <Col>
              <Form.Group controlId="formNotas">
                <Form.Label>Notas</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  maxLength={500}
                  placeholder="Adicione notas aqui (máximo de 5 linhas)..."
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formTemporario">
                <Form.Label>Texto Temporário</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Texto temporário (sem limite de linhas ou caracteres)..."
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={handleCancelar}>
              Cancelar
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={handleFinalizar} disabled={loading}>
              {loading ? "Enviando..." : "Finalizar"}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Main;
