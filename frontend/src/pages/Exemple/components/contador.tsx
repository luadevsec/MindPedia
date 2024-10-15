import styled from 'styled-components';
import { useContador } from '../hooks/useContador';

const ContadorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Contador: React.FC = () => {
  const { contador, incrementar, decrementar } = useContador();

  return (
    <ContadorContainer>
      <button onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button onClick={incrementar}>+</button>
    </ContadorContainer>
  );
};

export default Contador;
