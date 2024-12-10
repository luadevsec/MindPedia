import { Card, Button } from "react-bootstrap";
import { Contato } from "./contatoCard";

interface cardProps {
    contato: Contato | null;
}

const CardAtual = ({ contato }: cardProps) => {
    return (
        <Card 
            className="mb-3 shadow-sm" 
            style={{ width: "18rem" }}
        >
            <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img 
                    src={`/assets/${contato ? contato.foto : 'logo'}.jpeg`} 
                    className="rounded-circle mb-3" 
                    style={{ width: "100px", height: "100px", objectFit: "cover" }} 
                />
                <div className="text-center">
                    <Card.Title className="mb-1">{contato ? contato.nome : 'Você ainda não tem paciente'}</Card.Title>
                    <Card.Text className="text-muted mb-3">ID: {contato ? contato.id : '0'}</Card.Text>
                </div>
                <div className="d-flex justify-content-between w-100">
                    <Button href={`/ficha/${contato.id}`} variant="primary" className="w-50 me-2">Perfil</Button>
                    <Button href={`/atendimento/${contato.id}`} variant="success" className="w-50">Consultar</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardAtual;
