import { Row, Col } from "react-bootstrap";
import { TextForm } from "./formGroups";

const ContactInfoSection = ({ formData, handleChange }: any) => (
  <Row className="mb-4">
    <h2>Informações de Contato</h2>
    <Col>
      <TextForm name="email" value={formData.email} onChange={handleChange} placeholder="Digite seu email" />
      <TextForm name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Digite seu telefone" />
    </Col>
    <Col>
      <h5>Contato de Emergência</h5>
      {["nome", "parentesco", "telefone"].map((field) => (
        <TextForm
          key={field}
          name={`contatoEmergencia.${field}`}
          value={formData.contatoEmergencia[field]}
          onChange={handleChange}
          placeholder={`Digite o ${field} do contato`}
        />
      ))}
    </Col>
  </Row>
);

export default ContactInfoSection;
