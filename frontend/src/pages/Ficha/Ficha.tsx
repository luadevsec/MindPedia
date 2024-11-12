import { Row, Col } from 'react-bootstrap';
import Header from './components/header';
import Main from './components/main';

function Ficha() {
  return (
    <div>

        <Header />
        <Main />

        <Row className="bg-dark text-white p-3">
        <Col className="text-center">
          <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </Col>
      </Row>


    </div>

  );
}

export default Ficha;
