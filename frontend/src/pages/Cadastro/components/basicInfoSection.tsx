import { Row, Col } from "react-bootstrap";
import { TextForm, SelectForm } from "./formGroups";
import FotoSelect from "./fotoSelect";

const BasicInfoSection = ({ formData, handleChange, setFoto }: any) => (
  <Row className="mb-4">
    <h2>Informações Básicas</h2>
    <Col md={4}>
      <FotoSelect
        initialFoto={formData.idFoto ? `${formData.idFoto}.jpeg` : undefined}
        onSelect={(fotoId: string) => setFoto(fotoId.split(".")[0])}
      />
    </Col>
    <Col>
      <TextForm name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome" />
      <SelectForm name="genero" value={formData.genero} onChange={handleChange} options={["Masculino", "Feminino", "Outro"]} />
      <TextForm name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} placeholder="Digite sua data de nascimento" />
    </Col>
  </Row>
);

export default BasicInfoSection;
