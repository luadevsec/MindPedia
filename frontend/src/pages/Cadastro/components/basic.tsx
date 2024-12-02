import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function CompleteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    hobbies: [],
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'termsAccepted') {
        setFormData((prevData) => ({
          ...prevData,
          termsAccepted: checked,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          hobbies: checked
            ? [...prevData.hobbies, value]
            : prevData.hobbies.filter((hobby) => hobby !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Informações Básicas */}
      <h4 className="mb-3">Informações Básicas</h4>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Informações Adicionais */}
      <h4 className="mt-4 mb-3">Informações Adicionais</h4>

      {/* Gênero */}
      <Form.Group controlId="formGender" className="mb-3">
        <Form.Label>Gênero</Form.Label>
        <Form.Check
          type="radio"
          name="gender"
          value="Feminino"
          label="Feminino"
          checked={formData.gender === 'Feminino'}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          name="gender"
          value="Masculino"
          label="Masculino"
          checked={formData.gender === 'Masculino'}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          name="gender"
          value="Outro"
          label="Outro"
          checked={formData.gender === 'Outro'}
          onChange={handleChange}
        />
      </Form.Group>

      {/* País */}
      <Form.Group controlId="formCountry" className="mb-3">
        <Form.Label>País</Form.Label>
        <Form.Select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Selecione seu país</option>
          <option value="br">Brasil</option>
          <option value="us">Estados Unidos</option>
          <option value="jp">Japão</option>
        </Form.Select>
      </Form.Group>

      {/* Hobbies */}
      <Form.Group controlId="formHobbies" className="mb-3">
        <Form.Label>Hobbies</Form.Label>
        <Form.Check
          type="checkbox"
          name="hobbies"
          value="Esportes"
          label="Esportes"
          checked={formData.hobbies.includes('Esportes')}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          name="hobbies"
          value="Leitura"
          label="Leitura"
          checked={formData.hobbies.includes('Leitura')}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          name="hobbies"
          value="Jogos"
          label="Jogos"
          checked={formData.hobbies.includes('Jogos')}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Termos e Condições */}
      <Form.Group controlId="formTerms" className="mb-4">
        <Form.Check
          type="checkbox"
          name="termsAccepted"
          label="Eu aceito os termos e condições"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default CompleteForm;
