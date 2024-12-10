import { Row, Col } from "react-bootstrap";
import { TextForm } from "./formGroups";

const AdditionalInfoSection = ({ formData, handleChange }: any) => (
  <Row className="mb-4">
    <h2>Informações Adicionais</h2>
    <Col>
      {["sexualidade", "etnia", "estadoCivil"].map((field) => (
        <TextForm key={field} name={field} value={formData[field]} onChange={handleChange} placeholder={`Digite sua ${field}`} />
      ))}
    </Col>
    <Col>
      {["naturalidade", "nacionalidade", "profissao"].map((field) => (
        <TextForm key={field} name={field} value={formData[field]} onChange={handleChange} placeholder={`Digite sua ${field}`} />
      ))}
    </Col>
  </Row>
);

export default AdditionalInfoSection;
