import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

interface HeaderProps {
  consultas: string;
}

const Header = ({ consultas }: HeaderProps) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <Container
      fluid
      className="text-center"
      style={{ backgroundColor: '#024CAA', color: '#070D44', height: "13vh" }}
    >
      <Container>
        <h2>
          {formattedDate} - {formattedTime}
        </h2>
        <h3>
          {consultas ? `${consultas} consultas para hoje` : "Nenhuma consulta para hoje"}
        </h3>
      </Container>
    </Container>
  );
};

export default Header;
