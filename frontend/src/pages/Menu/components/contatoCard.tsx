import { Card } from "react-bootstrap";

export interface Contato {
  foto: string;
  nome: string;
  consulta: string;
  id: string;
  today?: boolean;
}

const ContatoCard = ({
  contato,
  onClick
}: {
  contato: Contato;
  onClick: () => void;
}) => {
  return (
    <Card
      className="mb-3 shadow-sm"
      style={{
        backgroundColor: contato.today ? '#EC7105' : '#AFEFFD',
        color: contato.today ? '#070D44' : '#024CAA',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Card.Body className="d-flex align-items-center">
        <Card.Img
          src={`/assets/${contato.foto}.jpeg`}
          className="rounded-circle me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div>
          <Card.Title className="mb-1">{contato.nome}</Card.Title>
          <Card.Text className="text-muted">{contato.consulta}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContatoCard;
