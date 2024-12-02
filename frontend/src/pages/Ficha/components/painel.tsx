import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

const Painel = () => {
  // Estado para controlar o conteúdo exibido
  const [conteudo, setConteudo] = useState<string>('Geral');

  // Função para alterar o conteúdo com base no link clicado
  const handleNavClick = (link: string) => {
    setConteudo(link);
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto">
          <Nav.Link href="#home" onClick={() => handleNavClick('Geral')}>Geral</Nav.Link>
          <Nav.Link href="#features" onClick={() => handleNavClick('Agendar')}>Agendar</Nav.Link>
          <Nav.Link href="#pricing" onClick={() => handleNavClick('Resumos')}>Resumos</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="mt-5">
        <h1>{conteudo}</h1>
        {conteudo === 'Geral' && <p>Conteúdo geral exibido aqui.</p>}
        {conteudo === 'Agendar' && <p>Conteúdo para agendamento exibido aqui.</p>}
        {conteudo === 'Resumos' && <p>Conteúdo de resumos exibido aqui.</p>}
      </Container>
    </Container>
  );
}

export default Painel;
