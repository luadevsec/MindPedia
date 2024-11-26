import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Themador = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('blue');
    else setTheme('light');
  };

  return (
    <Card
      style={{
        marginBottom: '20px',
        backgroundColor: theme === 'light' ? '#fff' : theme === 'dark' ? '#333' : '#00f',
        color: theme === 'light' ? '#000' : theme === 'dark' ? '#fff' : '#fff',
      }}
    >
      <Card.Body>
        <Card.Title>Trocar Tema</Card.Title>
        <Button variant="primary" onClick={toggleTheme}>Mudar Tema</Button>
      </Card.Body>
    </Card>
  );
};

export default Themador;
