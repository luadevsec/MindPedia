import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const [consultas, setConsultas] = useState(4);

  // Atualiza a data e a hora a cada segundo
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Formata data e hora
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <Container fluid className="p-4 bg-secondary text-white text-center">
      <Container>
        <h2>
          {formattedDate} - {formattedTime}
        </h2>
        <h3>
          {consultas} consultas para hoje.{" "}
          <Button 
            onClick={() => setConsultas(consultas + 1)} 
            aria-label="Adicionar consulta"
            variant="light"
          >
            +
          </Button>
        </h3>
      </Container>
    </Container>
  );
};

export default Header;
