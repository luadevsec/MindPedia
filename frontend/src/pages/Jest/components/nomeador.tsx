import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Nomeador = () => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmitName = () => {
    setIsSubmitted(true);
  };

  const handleResetName = () => {
    setIsSubmitted(false);
    setName('');
  };

  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>Digite seu nome kkkkk</Card.Title>
        {isSubmitted ? (
          <div>
            <h4 data-testid="greeting">Olá, {name}!</h4> {/* Adicionando o data-testid */}
            <Button variant="secondary" onClick={handleResetName} data-testid="reset-button">
              Voltar
            </Button>
          </div>
        ) : (
          <div>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Digite seu nome"
              data-testid="name-input" // Adicionando o data-testid
            />
            <Button
              variant="primary"
              onClick={handleSubmitName}
              disabled={!name}
              data-testid="submit-button" // Adicionando o data-testid
            >
              Enviar
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Nomeador;
