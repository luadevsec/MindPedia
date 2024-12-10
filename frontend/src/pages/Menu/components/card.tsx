import { Card } from "react-bootstrap";

interface Contato {
    nome: string;
    email: string;
    telefone: string;
    }
const Cardme = ( { contato } : {contato: Contato}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{contato.nome}</Card.Title>
                <Card.Text>{contato.email}</Card.Text>
                <Card.Text>{contato.telefone}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cardme;