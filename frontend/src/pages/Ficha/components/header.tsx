import { Container, Image, Button } from 'react-bootstrap';
import { Paciente } from '../hooks/typeMock';


interface HeaderProps {
    foto: Paciente['foto'];
    nome: Paciente['nome'];
}

const Header = ({ foto, nome } : HeaderProps) => {
    return (
        <Container fluid className="bg-primary text-white p-3 d-flex align-items-center justify-content-between">
            
            {/* Foto à esquerda */}
            <Image src={`/assets/${foto}.jpeg`} alt="foto de perfil falhado" className="img-fluid rounded-circle" style={{ width: '120px', height: '120px' }} />

            {/* Nome centralizado */}
            <h1 className="m-0">{nome}</h1>

            {/* Botão à direita */}
            <Button variant="light" href="/menu">Home</Button>

        </Container>
    );
}

export default Header;
