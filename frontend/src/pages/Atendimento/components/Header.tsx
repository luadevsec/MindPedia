import { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import FullCard from "./fullcard";
import { Paciente } from "../../../contexts/paciente";


interface HeaderProps {
    paciente: Paciente;
}
const Header = ({ paciente }: HeaderProps) => {

    const [open, setOpen] = useState<boolean>(false);
  return (
    <Container fluid className="p-4 bg-secondary text-white">
      <Row className="gx-2 gy-2 align-items-center">
        <Col md="auto">
          <Image src="https://via.placeholder.com/140" roundedCircle fluid />
        </Col>
        <Col>
            <Row>
          <Col>
          <h1>{paciente.nome}</h1>
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
          <div className="d-flex justify-content-center"></div>
          <Container>

            
          <Button onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Abrir'}</Button>

          </Container>
            {open && <FullCard paciente={paciente} />}
    </Container>
  );
}
      export default Header;
