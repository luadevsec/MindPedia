import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useSendSignal } from "../../../hooks/useFeach";
import { cargaCadastro } from "../../../contexts/cargaCadastro";
import { TextForm, SelectForm } from "./formGroups";
import FotoSelect from "./fotoSelect";
import { useNavigate } from "react-router-dom";

const BasicInfoSection = ({ formData, handleChange, setFoto }: any) => (
  <Row className="mb-4">
    <h2>Informações Básicas</h2>
    <Col md={4}>
      <FotoSelect
        initialFoto={formData.foto ? `${formData.foto}.jpeg` : undefined}
        onSelect={(fotoId: string) => setFoto(fotoId.split(".")[0])}
      />
    </Col>
    <Col>
      <TextForm
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Digite seu nome"
      />
      <SelectForm
        name="genero"
        value={formData.genero}
        onChange={handleChange}
        options={["Masculino", "Feminino", "Outro"]}
      />
      <TextForm
        name="dataNascimento"
        value={formData.dataNascimento}
        onChange={handleChange}
        placeholder="Digite sua data de nascimento"
      />
      <TextForm
        name="cpf"
        value={formData.cpf}
        onChange={handleChange}
        placeholder="Digite seu CPF"
      />
    </Col>
  </Row>
);

const AdditionalInfoSection = ({ formData, handleChange }: any) => (
  <Row className="mb-4">
    <h2>Informações Adicionais</h2>
    <Col>
      <TextForm
        name="sexualidade"
        value={formData.sexualidade}
        onChange={handleChange}
        placeholder="Digite sua sexualidade"
      />
      <TextForm
        name="etnia"
        value={formData.etnia}
        onChange={handleChange}
        placeholder="Digite sua etnia"
      />
      <TextForm
        name="estadoCivil"
        value={formData.estadoCivil}
        onChange={handleChange}
        placeholder="Digite seu estado civil"
      />
    </Col>
    <Col>
      <TextForm
        name="naturalidade"
        value={formData.naturalidade}
        onChange={handleChange}
        placeholder="Digite sua naturalidade"
      />
      <TextForm
        name="nacionalidade"
        value={formData.nacionalidade}
        onChange={handleChange}
        placeholder="Digite sua nacionalidade"
      />
      <TextForm
        name="hobby"
        value={formData.hobby.join(", ")}
        onChange={handleChange}
        placeholder="Digite seus hobbies separados por vírgulas"
      />
    </Col>
  </Row>
);

const ContactInfoSection = ({ formData, handleChange }: any) => (
  <Row className="mb-4">
    <h2>Informações de Contato</h2>
    <Col>
      <TextForm
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Digite seu email"
      />
      <TextForm
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        placeholder="Digite seu telefone"
      />
    </Col>
    <Col>
      <h5>Contato de Emergência</h5>
      <TextForm
        name="contatoEmergencia.nome"
        value={formData.contatoEmergencia.nome}
        onChange={handleChange}
        placeholder="Nome do contato"
      />
      <TextForm
        name="contatoEmergencia.parentesco"
        value={formData.contatoEmergencia.parentesco}
        onChange={handleChange}
        placeholder="Parentesco"
      />
      <TextForm
        name="contatoEmergencia.telefone"
        value={formData.contatoEmergencia.telefone}
        onChange={handleChange}
        placeholder="Telefone de emergência"
      />
    </Col>
  </Row>
);

const Main = () => {
  const { sendSignal, loading, error } = useSendSignal<cargaCadastro>("/cadastrar");
  const navigate = useNavigate(); // Inicializando o hook de navegação

  const [formData, setFormData] = useState({
    nome: "",
    genero: "",
    sexualidade: "",
    etnia: "",
    estadoCivil: "",
    dataNascimento: "",
    naturalidade: "",
    nacionalidade: "",
    foto: "",
    cpf: "",
    profissao: "",
    email: "",
    telefone: "",
    hobby: [],
    contatoEmergencia: {
      nome: "",
      parentesco: "",
      telefone: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("contatoEmergencia")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        contatoEmergencia: { ...prev.contatoEmergencia, [key]: value },
      }));
    } else if (name === "hobby") {
      setFormData((prev) => ({
        ...prev,
        hobby: value.split(",").map((hobby) => hobby.trim()),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const setFoto = (foto: string) => {
    setFormData((prev) => ({ ...prev, foto }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviar os dados e receber a resposta
      const response = await sendSignal({ paciente: formData });

      // A partir do ID retornado (supondo que o servidor retorne o ID do cadastro), redirecionar
      const id = response?.id; // Certifique-se de que o retorno tem o ID
      if (id) {
        navigate(`/ficha/${id}`); // Redireciona para a página da ficha com o ID
      }
      else {
        navigate("/ficha/mock"); // Redireciona para o menu
      }
      alert("Cadastro realizado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <Container className="p-4 bg-secondary text-white rounded">
      <h1 className="text-center">Ficha de Cadastro</h1>
      <Form onSubmit={handleSubmit}>
        <BasicInfoSection formData={formData} handleChange={handleChange} setFoto={setFoto} />
        <AdditionalInfoSection formData={formData} handleChange={handleChange} />
        <ContactInfoSection formData={formData} handleChange={handleChange} />
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </Form>
    </Container>
  );
};

export default Main;
