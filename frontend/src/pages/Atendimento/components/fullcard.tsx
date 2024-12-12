import { Col, Container, Row } from "react-bootstrap";
import { Paciente } from "../../../contexts/paciente";

interface CardProps {
  paciente: Paciente;
}

const FullCard = ({ paciente }: CardProps) => {
  const mais = ["profissao", "sexualidade", "nacionalidade", "naturalidade"] as const;
  const contato = ["nome", "parentesco", "telefone"] as const;

  return (
    <Container
      fluid
      className="p-4"
      style={{
        backgroundColor: "#070D44", // Fundo da paleta
        color: "#AFEFFD", // Texto
        borderRadius: "8px", // Bordas arredondadas
      }}
    >
      <Row className="gx-4 gy-4">
        {/* Coluna: Mais informações */}
        <Col md={6} className="p-3" style={{ backgroundColor: "#024CAA", borderRadius: "8px" }}>
          <h2 className="text-white">Mais Informações</h2>
          {mais.map((item) => (
            <p key={item} style={{ color: "#AFEFFD" }}>
              <strong>{item.charAt(0).toUpperCase() + item.slice(1)}:</strong> {paciente[item]}
            </p>
          ))}
        </Col>

        {/* Coluna: Contato de emergência */}
        <Col md={6} className="p-3" style={{ backgroundColor: "#EC7105", borderRadius: "8px" }}>
          <h2 className="text-white">Contato de Emergência</h2>
          {contato.map((item) => (
            <p key={item} style={{ color: "#070D44" }}>
              <strong>{item.charAt(0).toUpperCase() + item.slice(1)}:</strong>{" "}
              {paciente.contatoEmergencia[item]}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FullCard;
