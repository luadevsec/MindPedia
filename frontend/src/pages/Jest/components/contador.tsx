import { Card, Button } from 'react-bootstrap';
import { useCounter } from '../hooks/useCounter';

const Contador = () => {
  const { counter, increment, decrement, reset } = useCounter(); // Usando o hook

  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>Contador</Card.Title>
        <p data-testid="contador-value">{counter}</p> {/* Adicionando o data-testid */}
        <Button variant="primary" onClick={increment}>Subir</Button>
        <Button variant="secondary" onClick={decrement}>Descer</Button>
        <Button variant="danger" onClick={reset}>Resetar</Button> {/* Botão de Resetar */}
      </Card.Body>
    </Card>
  );
};

export default Contador;
