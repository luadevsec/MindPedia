import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const [consultas, setConsultas] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <Container
      fluid
      className="p-4 text-center"
      style={{ backgroundColor: '#024CAA', color: '#070D44' }}
    >
      <Container>
        <h2>
          {formattedDate} - {formattedTime}
        </h2>
        <h3>
          {consultas} consultas para hoje.
        </h3>
      </Container>
    </Container>
  );
};

export default Header;
