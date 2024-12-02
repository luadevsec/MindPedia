import { Container, Row, Col } from 'react-bootstrap';
import Painel from './painel';
import { Historico, Paciente, Agendamento } from '../hooks/typeMock';

interface MainProps {
    paciente: Paciente;
    historico: Historico;
    agendamento: Agendamento;
}

const Main = ( { paciente, historico, agendamento }: MainProps ) => {
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
                            {item}: {paciente[item] as keyof Paciente}
                        </p>
                    ))}
                </Col>

                {/* Segunda coluna (altura 2) com sub-coluna (altura 1) */}
                <Col md={3}>
                    <Row className="bg-warning p-3" style={{ minHeight: '20vh' }}>
                        <h1>Mais</h1>
                        {mais.map((item) => (
                            <p key={item}>
                                {item}: {paciente[item] as keyof Paciente}
                            </p>
                        ))}
                    </Row>
                    <Row className="bg-danger p-3 mt-3" style={{ minHeight: '10vh' }}>
                        <h1>Contato</h1>
                        {contato.map((item) => {
                            // Verificando se estamos lidando com o contatoEmergencia
                            if (item === 'nome' || item === 'parentesco' || item === 'telefone') {
                                return (
                                    <p key={item}>
                                        {item}: {paciente.contatoEmergencia[item] as keyof Paciente['contatoEmergencia']}
                                    </p>
                                );
                            } else {
                                return null; // Isso garante que outros itens não sejam acessados no contexto errado
                            }
                        })}
                    </Row>
                </Col>

                {/* Terceira coluna (altura 3) */}
                <Col md={6} className="bg-success p-3" style={{ minHeight: '30vh' }}>
                    <Painel historico={historico} agendamento= {agendamento} />
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
