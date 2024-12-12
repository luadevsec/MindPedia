import { Container, Image, Button } from "react-bootstrap";
import { Paciente } from "../hooks/typeMock";
import { FaHome } from "react-icons/fa"; // Ícone do Font Awesome

interface HeaderProps {
  foto: Paciente["idFoto"];
  nome: Paciente["nome"];
}

const Header = ({ foto, nome }: HeaderProps) => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#024CAA", // Background
        color: "#AFEFFD", // Detalhes (Texto)
      }}
      className="p-3 d-flex align-items-center justify-content-between"
    >
      {/* Foto à esquerda */}
      <Image
        src={`/assets/${foto}.jpeg`}
        alt="Foto de perfil falhado"
        className="img-fluid rounded-circle"
        style={{
          width: "120px",
          height: "120px",
          border: `2px solid #070D44`, // Secundária
        }}
      />

      {/* Nome centralizado */}
      <h1 className="m-0" style={{ color: "#AFEFFD" }}>
        {nome}
      </h1>

      {/* Botão à direita */}
      <Button
        variant="light"
        href="/menu"
        style={{
          backgroundColor: "#070D44", // Primária
          color: "#AFEFFD", // Detalhes (Texto)
          borderColor: "#EC7105", // Secundária
          display: "flex",
          alignItems: "center",
          gap: "8px", // Espaço entre o texto e o ícone
        }}
      >
        <FaHome />  Menu
      </Button>
    </Container>
  );
};

export default Header;
