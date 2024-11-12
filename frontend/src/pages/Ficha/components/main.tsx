import { Container, Row, Col } from 'react-bootstrap';
import Painel from './painel';

type MockType = {
    nome: string;
    genero: string;
    sexualidade: string;
    etnia: string;
    estadoCivil: string;
    dataNascimento: string;
    naturalidade: string;
    nacionalidade: string;
    rg: string;
    cpf: string;
    profissao: string;
    email: string;
    telefone: string;
    hobby: string[];
    contatoEmergencia: {
        nome: string;
        parentesco: string;
        telefone: string;
    };
};

const Mock: MockType = {
    nome: 'Lunna Cipher Oliveira',
    genero: 'Feminino',
    sexualidade: 'Pansexual',
    etnia: 'Não especificada',
    estadoCivil: 'Solteira',
    dataNascimento: '17/11/2002',
    naturalidade: 'Não especificada',
    nacionalidade: 'Brasileira',
    rg: '123456789',
    cpf: '123.456.789-00',
    profissao: 'Programadora',
    email: 'lunna.cipher@exemplo.com',
    telefone: '(11) 91234-5678',
    hobby: ['Jogos', 'Programação', 'Tecnologia'],
    contatoEmergencia: {
        nome: 'Dany PLS',
        parentesco: 'Namorada',
        telefone: '(11) 98765-4321'
    }
};


const Main = () => {
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
                            {item}: {Mock[item as keyof MockType]}
                        </p>
                    ))}
                </Col>

                {/* Segunda coluna (altura 2) com sub-coluna (altura 1) */}
                <Col md={3}>
                    <Row className="bg-warning p-3" style={{ minHeight: '20vh' }}>
                        <h1>Mais</h1>
                        {mais.map((item) => (
                            <p key={item}>
                                {item}: {Mock[item as keyof MockType]}
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
                                        {item}: {Mock.contatoEmergencia[item as keyof typeof Mock.contatoEmergencia]}
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
                    <Painel />
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
