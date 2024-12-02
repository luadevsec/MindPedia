import { Form, Button, Image, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useSendSignal } from "../../../hooks/useFeach";

type MockType = {
  nome: string;
  genero: string;
  dataNascimento: string;
  etnia: string;
  estadoCivil: string;
  cpf: string;
  profissao: string;
  email: string;
  telefone: string;
  contatoEmergencia: {
    nome: string;
    parentesco: string;
    telefone: string;
  };
};

const Mock: MockType = {
  nome: "Lunna Cipher Oliveira",
  genero: "Feminino",
  dataNascimento: "2002-11-17",
  etnia: "Não especificada",
  estadoCivil: "Solteira",
  cpf: "123.456.789-00",
  profissao: "Programadora",
  email: "lunna.cipher@exemplo.com",
  telefone: "(11) 91234-5678",
  contatoEmergencia: {
    nome: "Dany PLS",
    parentesco: "Namorada",
    telefone: "(11) 98765-4321",
  },
};

const Main = () => {
  const { sendSignal, loading, error } = useSendSignal<MockType>("/cadastro");
  const [formData, setFormData] = useState<MockType>(Mock);

  // Atualizar os dados do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Verificar campos aninhados (ex.: contatoEmergencia)
    if (name.startsWith("contatoEmergencia")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        contatoEmergencia: {
          ...prev.contatoEmergencia,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Submissão do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendSignal(formData);
      alert("Cadastro realizado com sucesso!");
      console.log("Cadastro realizado com sucesso!", formData);
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <Container className="p-4 bg-secondary text-white rounded">
      <h1 className="text-center">Ficha de Cadastro</h1>
      <Form onSubmit={handleSubmit}>
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
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gênero</Form.Label>
              <Form.Select name="genero" value={formData.genero} onChange={handleChange}>
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
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <h2>Informações Adicionais</h2>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Etnia</Form.Label>
              <Form.Control
                type="text"
                name="etnia"
                value={formData.etnia}
                onChange={handleChange}
                placeholder="Digite sua etnia"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Estado Civil</Form.Label>
              <Form.Select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
                {["Solteiro", "Casado", "Divorciado", "Viúvo"].map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="Digite seu CPF"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Profissão</Form.Label>
              <Form.Control
                type="text"
                name="profissao"
                value={formData.profissao}
                onChange={handleChange}
                placeholder="Digite sua profissão"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h2>Informações de Contato</h2>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
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
                name="contatoEmergencia.nome"
                value={formData.contatoEmergencia.nome}
                onChange={handleChange}
                placeholder="Nome do contato"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Parentesco</Form.Label>
              <Form.Control
                type="text"
                name="contatoEmergencia.parentesco"
                value={formData.contatoEmergencia.parentesco}
                onChange={handleChange}
                placeholder="Parentesco"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="contatoEmergencia.telefone"
                value={formData.contatoEmergencia.telefone}
                onChange={handleChange}
                placeholder="Telefone de emergência"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </Form>
    </Container>
  );
};

export default Main;
