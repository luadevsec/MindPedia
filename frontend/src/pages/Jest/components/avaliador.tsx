import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Avaliador = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleInputSubmit = () => {
    if (inputText.toLowerCase() === 'tqs') {
      setInputText('Admin');
    }
  };

  return (
    <Card
      style={{
        marginBottom: '20px',
        backgroundColor: inputText.toLowerCase() === 'admin' ? 'blue' : '#fff',
        color: inputText.toLowerCase() === 'admin' ? '#fff' : '#000',
      }}
    >
      <Card.Body>
        <Card.Title>Input com comportamento específico</Card.Title>
        <Form.Control
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Digite algo"
        />
        <Button variant="primary" onClick={handleInputSubmit}>Enviar</Button>
      </Card.Body>
    </Card>
  );
};

export default Avaliador;
