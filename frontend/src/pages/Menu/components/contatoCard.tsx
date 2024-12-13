import { Card } from "react-bootstrap";

export interface Contato {
  foto: string;
  nome: string;
  consulta: string; // ISO String
  id: string;
  today?: boolean;
}

// Função para formatar a data no timezone de São Paulo
const formatDateToBrazilian = (isoString: string): string => {
  const date = new Date(isoString);
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  // Formatando e retornando no formato dd/mm/aaaa - hh:mm
  return formatter.format(date).replace(", ", " - ");
};

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
        backgroundColor: contato.today ? "#EC7105" : "#AFEFFD",
        color: contato.today ? "#070D44" : "#024CAA",
        cursor: "pointer",
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
          <Card.Text className="text-muted">
            {formatDateToBrazilian(contato.consulta)}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContatoCard;
