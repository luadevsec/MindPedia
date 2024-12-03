import { Col, Container, Row } from 'react-bootstrap';
import { Paciente } from '../../../contexts/pacienteTypes';

interface cardProps {
    paciente: Paciente;
}

const FullCard = ({ paciente }: cardProps) => {
    const sobre = ['nome', 'genero', 'etnia', 'estadoCivil', 'dataNascimento', 'email', 'telefone'] as const;
    const mais = ['profissao', 'hobby', 'sexualidade', 'nacionalidade', 'rg', 'cpf', 'naturalidade'] as const;
    const contato = ['nome', 'parentesco', 'telefone'] as const;

    return (
        <Container fluid className="p-4">
            <Row className="gx-3 gy-4">
                {/* Primeira coluna (altura 3) */}
                <Col md={3} className="bg-info p-3" style={{ minHeight: '30vh' }}>
                    <h1>Sobre mim</h1>
                    {sobre.map((item) => (
                        <p key={item}>
                            {item}: {paciente[item]}
                        </p>
                    ))}
                </Col>
                {/* Segunda coluna (altura 3) */}
                <Col md={3} className="bg-info p-3" style={{ minHeight: '30vh' }}>
                    <h1>Mais informações</h1>
                    {mais.map((item) => (
                        <p key={item}>
                            {item}: {paciente[item]}
                        </p>
                    ))}
                </Col>
                {/* Terceira coluna (altura 3) */}
                <Col md={3} className="bg-info p-3" style={{ minHeight: '30vh' }}>
                    <h1>Contato de emergência</h1>
                    {contato.map((item) => (
                        <p key={item}>
                            {item}: {paciente.contatoEmergencia[item]}
                        </p>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default FullCard;