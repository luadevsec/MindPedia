import { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import FullCard from "./fullcard";
import { Paciente } from "../../../contexts/paciente";
import { FaUserCircle } from "react-icons/fa"; // Ícone de perfil

interface HeaderProps {
  paciente: Paciente;
}

const Header = ({ paciente }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container
      fluid
      className="p-4"
      style={{
        backgroundColor: "#070D44", // Background
        color: "#AFEFFD", // Texto
      }}
    >
      <Row className="gx-3 gy-3 align-items-center">
        <Col md="auto">
          {/* Foto à esquerda */}
          <Image
            src={`/assets/${paciente.idFoto}.jpeg`}
            alt="Foto de perfil falhado"
            className="img-fluid rounded-circle"
            style={{
              width: "140px",
              height: "140px",
              border: `2px solid #EC7105`, // Secundária
            }}
          />
        </Col>

        {/* Informações do paciente */}
        <Col>
          <Row>
            <Col>
              <h1 style={{ color: "#AFEFFD" }}>{paciente.nome}</h1>
              <p>
                <strong>Estado Civil:</strong> {paciente.estadoCivil}
              </p>
              <p>
                <strong>Telefone:</strong> {paciente.telefone}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Gênero:</strong> {paciente.genero}
              </p>
              <p>
                <strong>Sexualidade:</strong> {paciente.sexualidade}
              </p>
              <p>
                <strong>Profissão:</strong> {paciente.profissao}
              </p>
            </Col>
            <Col>
              <p>
                <strong>Data de Nascimento:</strong> {paciente.dataNascimento}
              </p>
              <p>
                <strong>Etnia:</strong> {paciente.etnia}
              </p>
              <p>
                <strong>Naturalidade:</strong> {paciente.naturalidade}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Botão para abrir/fechar a ficha */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "#024CAA", // Primária
            color: "#AFEFFD", // Detalhes (Texto)
            borderColor: "#EC7105", // Secundária
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaUserCircle />
          {open ? "Fechar Mini Ficha" : "Abrir Mini Ficha"}
        </Button>
      </div>

      {/* Mini ficha */}
      {open && (
        <Container className="mt-4">
          <FullCard paciente={paciente} />
        </Container>
      )}
    </Container>
  );
};

export default Header;
