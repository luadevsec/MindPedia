import { Navbar, Nav } from "react-bootstrap";

interface PainelNavbarProps {
  conteudo: string;
  onNavClick: (link: string) => void;
}

export const PainelNavbar = ({ conteudo, onNavClick }: PainelNavbarProps) => (
  <Navbar bg="dark" variant="dark">
    <Nav className="ml-auto">
      {["Geral", "Resumos", "Consultas", "Notas", "Agendar"].map((item) => (
        <Nav.Link
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => onNavClick(item)}
          active={conteudo === item}
        >
          {item}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);
