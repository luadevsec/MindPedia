import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Meu Site</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#features">Sobre</Nav.Link>
          <Nav.Link href="#pricing">Contato</Nav.Link>
        </Nav>
      </Navbar>

      {/* Container e Row */}
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h1>Bem-vindo ao meu site!</h1>
            <p>Esta é uma página de exemplo usando React-Bootstrap.</p>
            <Button variant="primary">Clique aqui</Button>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/500" alt="Exemplo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
