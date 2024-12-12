import { Container, Form, Button } from "react-bootstrap";
import { useCadastroForm } from "../hooks/useCadastroForm";

import BasicInfoSection from "./basicInfoSection";
import AdditionalInfoSection from "./additionalInfoSection";
import ContactInfoSection from "./ContactInfoSection";

const Main = () => {
  const { formData, handleChange, setFoto, handleSubmit, loading, error } = useCadastroForm();

  return (
    <div style={{backgroundColor: '#AFEFFD'}}>
    <Container
      className="p-4"
      style={{
        backgroundColor: "#070D44", // Fundo principal
        color: "#AFEFFD", // Texto
        borderRadius: "8px", // Bordas arredondadas
      }}
    >
      <h1 className="text-center mb-4" style={{ color: "#EC7105" }}>Ficha de Cadastro</h1>
      <Form onSubmit={handleSubmit}>
        {/* Seções de cadastro */}
        <BasicInfoSection formData={formData} handleChange={handleChange} setFoto={setFoto} />
        <AdditionalInfoSection formData={formData} handleChange={handleChange} />
        <ContactInfoSection formData={formData} handleChange={handleChange} />

        {/* Botão de submissão */}
        <div className="text-center mt-4">
          <Button
            variant="outline-success"
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? "#AFEFFD" : "#024CAA",
              color: loading ? "#070D44" : "#AFEFFD",
              border: "2px solid #024CAA",
              padding: "10px 20px",
              borderRadius: "6px",
            }}
          >
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </div>

        {/* Exibição de erros */}
        {error && (
          <p className="text-danger text-center mt-3" style={{ color: "#EC7105" }}>
            {error}
          </p>
        )}
      </Form>
    </Container>
    </div>
  );
};

export default Main;
