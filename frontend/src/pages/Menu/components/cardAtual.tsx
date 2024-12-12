import { Card, Button } from "react-bootstrap";
import { Contato } from "./contatoCard";

interface cardProps {
  contato: Contato | null;
}

const CardAtual = ({ contato }: cardProps) => {
  const id = contato?.id || "0";
  const nome = contato?.nome || "Você ainda não tem paciente";
  const foto = contato?.foto || "logo";

  return (
    <Card
      className="mb-3 shadow-sm"
      style={{
        width: "18rem",
        backgroundColor: '#024CAA',
        color: '#070D44',
        borderColor: '#AFEFFD',
      }}
    >
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Img
          src={`/assets/${foto}.jpeg`}
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="text-center">
          <Card.Title className="mb-1" style={{ color: '#AFEFFD' }}>
            {nome}
          </Card.Title>
          <Card.Text className=" mb-3" style={{ color: '#070D44' }}>
            ID: {id}
          </Card.Text>
        </div>
        <div className="d-flex justify-content-between w-100">
          <Button
            href={`/ficha/${id}`}
            className="w-50 me-2"
            style={{
              backgroundColor: '#070D44',
              borderColor: '#EC7105',
              color: '#AFEFFD',
            }}
            disabled={!contato}
          >
            Perfil
          </Button>
          <Button
            href={`/atendimento/${id}`}
            className="w-50"
            style={{
              backgroundColor: '#EC7105',
              borderColor: '#070D44',
              color: '#070D44',
            }}
            disabled={!contato}
          >
            Consultar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardAtual;
