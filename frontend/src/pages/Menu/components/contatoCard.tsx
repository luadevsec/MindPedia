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
  onClick: () => void;  // Função que será chamada quando o card for clicado
}) => {
  return (
    <Card
      className="mb-3 shadow-sm"
      style={contato.today ? { backgroundColor: "#d4edda" } : {}}
      onClick={onClick} // Chama a função onClick ao clicar no card
    >
      <Card.Body className="d-flex align-items-center">
        {/* Imagem */}
        <Card.Img
          src={`/assets/${contato.foto}.jpeg`}
          className="rounded-circle me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        {/* Detalhes */}
        <div>
          <Card.Title className="mb-1">{contato.nome}</Card.Title>
          <Card.Text className="text-muted">{contato.consulta}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContatoCard;
