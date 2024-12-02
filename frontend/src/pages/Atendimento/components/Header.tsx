import { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import FullCard from "./fullcard";

type MockType = {
  nome: string;
  genero: string;
  sexualidade: string;
  etnia: string;
  estadoCivil: string;
  dataNascimento: string;
  naturalidade: string;
  nacionalidade: string;
  rg: string;
  cpf: string;
  profissao: string;
  email: string;
  telefone: string;
  hobby: string[];
  contatoEmergencia: {
    nome: string;
    parentesco: string;
    telefone: string;
  };
};

const Mock: MockType = {
  nome: "Lunna Cipher Oliveira",
  genero: "Feminino",
  sexualidade: "Pansexual",
  etnia: "Não especificada",
  estadoCivil: "Solteira",
  dataNascimento: "17/11/2002",
  naturalidade: "Não especificada",
  nacionalidade: "Brasileira",
  rg: "12.345.678-X",
  cpf: "123.456.789-00",
  profissao: "Programadora",
  email: "lunna.cipher@exemplo.com",
  telefone: "(11) 91234-5678",
  hobby: ["Jogos", "Programação", "Tecnologia"],
  contatoEmergencia: {
    nome: "Dany PLS",
    parentesco: "Namorada",
    telefone: "(11) 98765-4321",
  },
};

const Header = () => {

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
                <h5>{Mock.nome}</h5>
                <p>
                    <strong>Estado Civil:</strong> {Mock.estadoCivil}
                </p>
                <p>
                    <strong>Telefone:</strong> {Mock.telefone}
                </p>
                </Col>
                <Col>
                <p>
                    <strong>Gênero:</strong> {Mock.genero}
                </p>
                <p>
                    <strong>Sexualidade:</strong> {Mock.sexualidade}
                </p>
                <p>
                    <strong>Profissão:</strong> {Mock.profissao}
                </p>
                </Col>
                <Col>
                <p>
                    <strong>Data de Nascimento:</strong> {Mock.dataNascimento}
                </p>
                <p>
                    <strong>Etnia:</strong> {Mock.etnia}
                </p>
                <p>
                    <strong>Naturalidade:</strong> {Mock.naturalidade}
                </p>
                </Col>
            </Row>
        </Col>
      </Row>
    <div className="d-flex justify-content-center">
      <Button onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Abrir'}</Button>
    </div>

    { open && <FullCard /> }
    </Container>
  );
};

export default Header;
