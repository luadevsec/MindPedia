import { Form, Button, Image, Container, Col, Row } from "react-bootstrap";

interface CampoProps {
  name: string;
  type: string;
  options?: string[];
}

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

const Main = () => {
  return (
    <Container className="p-4 bg-secondary text-white rounded">
        <h1 className="text-center">Ficha de Cadastro</h1>
      <Form>
        {/* Informações Básicas */}
        <Row className="mb-4">
          <h2>Informações Básicas</h2>
          <Col md={4}>
            <Image src="https://via.placeholder.com/460" rounded fluid />
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                defaultValue={Mock.nome}
                placeholder="Digite seu nome"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gênero</Form.Label>
              <Form.Select name="genero" defaultValue={Mock.genero}>
                {["Masculino", "Feminino", "Outro"].map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                name="dataNascimento"
                defaultValue={Mock.dataNascimento}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Informações Adicionais */}
        <Row className="mb-4">
          <h2>Informações Adicionais</h2>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Etnia</Form.Label>
              <Form.Control
                type="text"
                name="etnia"
                defaultValue={Mock.etnia}
                placeholder="Digite sua etnia"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Estado Civil</Form.Label>
              <Form.Select name="estadoCivil" defaultValue={Mock.estadoCivil}>
                {["Solteiro", "Casado", "Divorciado", "Viúvo"].map(
                  (option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  )
                )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                defaultValue={Mock.cpf}
                placeholder="Digite seu CPF"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Profissão</Form.Label>
              <Form.Control
                type="text"
                name="profissao"
                defaultValue={Mock.profissao}
                placeholder="Digite sua profissão"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Informações de Contato */}
        <Row>
          <h2>Informações de Contato</h2>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={Mock.email}
                placeholder="Digite seu email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                defaultValue={Mock.telefone}
                placeholder="Digite seu telefone"
              />
            </Form.Group>
          </Col>
          <Col>
            <h5>Contato de Emergência</h5>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nomeEmergencia"
                defaultValue={Mock.contatoEmergencia.nome}
                placeholder="Nome do contato"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Parentesco</Form.Label>
              <Form.Control
                type="text"
                name="parentescoEmergencia"
                defaultValue={Mock.contatoEmergencia.parentesco}
                placeholder="Parentesco"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefoneEmergencia"
                defaultValue={Mock.contatoEmergencia.telefone}
                placeholder="Telefone de emergência"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default Main;
