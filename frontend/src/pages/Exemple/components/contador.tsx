
import { useContador } from '../hooks/useContador';



const Contador: React.FC = () => {
  const { contador, incrementar, decrementar } = useContador();

  return (
    <div>
      
      <button onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Contador;
