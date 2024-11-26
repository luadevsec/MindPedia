import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Vulnerable = () => {
  const [htmlInput, setHtmlInput] = useState('');

  const handleHtmlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHtmlInput(e.target.value);
  };

  const handleHtmlSubmit = () => {
    if (htmlInput.includes('<button>')) {
      setHtmlInput('<button>Vulnerabilidade detectada!</button>');
    }
  };

  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>Testar Vulnerabilidade HTML Injection</Card.Title>
        <Form.Control
          type="text"
          value={htmlInput}
          onChange={handleHtmlChange}
          placeholder="Digite algo"
        />
        <Button variant="primary" onClick={handleHtmlSubmit}>Enviar</Button>
        <div
          dangerouslySetInnerHTML={{ __html: htmlInput }}
          style={{ marginTop: '10px' }}
        />
      </Card.Body>
    </Card>
  );
};

export default Vulnerable;
