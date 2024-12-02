import { Container, Row, Col, Button } from 'react-bootstrap';

function LayoutExample() {
  return (
    <>

    {/* Container padrão */}
    <Container className="mb-4 p-3 border">
    <h3>Container Padrão</h3>
    <p>Este contêiner é centralizado e ajustado automaticamente de acordo com o tamanho da tela.</p>
  </Container>

  {/* Container fluido */}
  <Container fluid className="mb-4 p-3 border">
    <h3>Container Fluido</h3>
    <p>Este contêiner ocupa 100% da largura da tela, independentemente do tamanho.</p>
  </Container>

  {/* Container com breakpoint */}
  <Container fluid="md" className="mb-4 p-3 border">
    <h3>Container Fluido a partir de 'md'</h3>
    <p>Este contêiner é fluido apenas em telas médias (md) ou menores.</p>
  </Container>

  {/* Grid com Row e Col */}
  <Container className="mb-4 p-3 border">
    <h3>Grid com Row e Col</h3>
    <Row>
      <Col className="border p-3">Coluna 1</Col>
      <Col className="border p-3">Coluna 2</Col>
      <Col className="border p-3">Coluna 3</Col>
    </Row>
  </Container>

  {/* Colunas com tamanhos definidos */}
  <Container className="mb-4 p-3 border">
    <h3>Grid com Tamanhos de Coluna Definidos</h3>
    <Row>
      <Col md={4} className="border p-3">Coluna 1 (md=4)</Col>
      <Col md={8} className="border p-3">Coluna 2 (md=8)</Col>
    </Row>
  </Container>

  {/* Flexbox com alinhamento centralizado */}
  <Container className="d-flex justify-content-center align-items-center mb-4 p-3 border" style={{ height: '100px' }}>
    <p>Conteúdo centralizado usando Flexbox</p>
  </Container>

  {/* Espaçamento de margem e padding */}
  <Container className="mt-5 p-3 border">
    <h3>Exemplo de Espaçamento</h3>
    <Row>
      <Col className="m-3 p-3 border">Margem e Padding (m-3, p-3)</Col>
      <Col className="m-3 p-3 border">Margem e Padding (m-3, p-3)</Col>
    </Row>
  </Container>

  {/* Alinhamento de texto */}
  <Container className="mb-4 p-3 border">
    <h3>Alinhamento de Texto</h3>
    <p className="text-left">Texto alinhado à esquerda</p>
    <p className="text-center">Texto centralizado</p>
    <p className="text-right">Texto alinhado à direita</p>
  </Container>

  {/* Float e botões */}
  <Container className="mb-4 p-3 border">
    <h3>Float e Botões</h3>
    <Button variant="secondary" className="float-right">Botão Direita</Button>
    <Button variant="primary" className="float-left mr-2">Botão Esquerda</Button>
  </Container>
    <Container fluid>
      {/* Header */}
      <Row className="bg-primary text-white p-3">
        <Col>
          <h1>Meu Site</h1>
          <p>Bem-vindo ao exemplo de layout com React Bootstrap</p>
        </Col>
      </Row>

      {/* Main Content */}
      <Container>
        <Row className="my-4">
          {/* Sidebar */}
          <Col md={4} className="bg-light p-3">
            <h4>Sidebar</h4>
            <p>Conteúdo adicional, como navegação ou links.</p>
          </Col>

          {/* Main Column */}
          <Col md={8} className="bg-white p-3">
            <h4>Conteúdo Principal</h4>
            <p>
              Aqui vai o conteúdo principal da página. Use `Row` e `Col` dentro desta seção para subdividir o conteúdo em grids.
            </p>

            {/* Nested Row */}
            <Row>
              <Col sm={6} className="p-2 bg-secondary text-white">
                <p>Coluna aninhada 1</p>
              </Col>
              <Col sm={6} className="p-2 bg-dark text-white">
                <p>Coluna aninhada 2</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Row className="bg-dark text-white p-3">
        <Col className="text-center">
          <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </Col>
      </Row>
    </Container>

    </>
  );
}

export default LayoutExample;
