import { Container, Image, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid className="bg-primary text-white p-3 d-flex align-items-center justify-content-between">
            
            {/* Foto à esquerda */}
            <Image src="https://via.placeholder.com/120" alt="Exemplo" className="img-fluid" />

            {/* Nome centralizado */}
            <h1 className="m-0">Lunna Cipher Oliveira</h1>

            {/* Botão à direita */}
            <Button variant="light">Home</Button>

        </Container>
    );
}

export default Header;
