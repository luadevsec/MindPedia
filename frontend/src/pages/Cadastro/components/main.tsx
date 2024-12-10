import { Container, Form, Button } from "react-bootstrap";
import { useCadastroForm } from "../hooks/useCadastroForm";

import BasicInfoSection from "./basicInfoSection";
import AdditionalInfoSection from "./additionalInfoSection";
import ContactInfoSection from "./ContactInfoSection";

const Main = () => {
  const { formData, handleChange, setFoto, handleSubmit, loading, error } = useCadastroForm();

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
