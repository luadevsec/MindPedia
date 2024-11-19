import { Col, Container, Row } from 'react-bootstrap';

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
    email: 'lunna@justest.com',
    telefone: '(11) 91234-5678',
    hobby: ['Jogos', 'Programação', 'Tecnologia'],
    contatoEmergencia: {
        nome: 'Dany PLS',
        parentesco: 'Namorada',
        telefone: '(11) 98765-4321'
    }
};

const FullCard = () => {
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
                {/* Segunda coluna (altura 3) */}
                <Col md={3} className="bg-info p-3" style={{ minHeight: '30vh' }}>
                    <h1>Mais informações</h1>
                    {mais.map((item) => (
                        <p key={item}>
                            {item}: {Mock[item as keyof MockType]}
                        </p>
                    ))}
                </Col>
                {/* Terceira coluna (altura 3) */}
                <Col md={3} className="bg-info p-3" style={{ minHeight: '30vh' }}>
                    <h1>Contato de emergência</h1>
                    {contato.map((item) => (
                        <p key={item}>
                            {item}: {Mock.contatoEmergencia[item as keyof ContatoEmergencia]}
                        </p>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default FullCard;