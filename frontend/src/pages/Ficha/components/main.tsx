import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaGlobe, FaMapMarkerAlt, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import Painel from './painel';
import { Historico, Paciente } from '../hooks/typeMock';

interface MainProps {
  paciente: Paciente;
  historico: Historico;
  agendamento: string | null;
  id: string;
}

const Main = ({ paciente, historico, agendamento, id }: MainProps) => {
  const sobre = [
    { label: 'Nome', value: paciente.nome, icon: <FaUser /> },
    { label: 'Gênero', value: paciente.genero, icon: <AiOutlineHeart /> },
    { label: 'Etnia', value: paciente.etnia, icon: <FaMapMarkerAlt /> },
    { label: 'Estado Civil', value: paciente.estadoCivil, icon: <FaHeart /> },
    { label: 'Data de Nascimento', value: paciente.dataNascimento, icon: <FaCalendarAlt /> },
    { label: 'Email', value: paciente.email, icon: <FaEnvelope /> },
    { label: 'Telefone', value: paciente.telefone, icon: <FaPhone /> },
  ];

  const mais = [
    { label: 'Profissão', value: paciente.profissao, icon: <FaBriefcase /> },
    { label: 'Sexualidade', value: paciente.sexualidade, icon: <FaHeart /> },
    { label: 'Nacionalidade', value: paciente.nacionalidade, icon: <FaGlobe /> },
    { label: 'Naturalidade', value: paciente.naturalidade, icon: <FaMapMarkerAlt /> },
  ];

  const contato = [
    { label: 'Nome', value: paciente.contatoEmergencia.nome, icon: <FaUser /> },
    { label: 'Parentesco', value: paciente.contatoEmergencia.parentesco, icon: <FaHeart /> },
    { label: 'Telefone', value: paciente.contatoEmergencia.telefone, icon: <FaPhone /> },
  ];

  return (
    <Container fluid className="p-4" style={{ backgroundColor: '#070D44', color: '#AFEFFD' }}>
      <Row className="gx-3 gy-4">
        {/* Primeira coluna */}
        <Col md={3}>
          <h2 style={{ color: '#024CAA' }}>Sobre Mim</h2>
          {sobre.map((item, index) => (
            <Card key={index} className="mb-3" style={{ backgroundColor: '#024CAA', color: '#AFEFFD' }}>
              <Card.Body className="d-flex align-items-center">
                <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.icon}</div>
                <div>
                  <Card.Title style={{ marginBottom: 0 }}>{item.label}</Card.Title>
                  <Card.Text>{item.value}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Segunda coluna */}
        <Col md={3}>
          <h2 style={{ color: '#024CAA' }}>Mais</h2>
          {mais.map((item, index) => (
            <Card key={index} className="mb-3" style={{ backgroundColor: '#EC7105', color: '#070D44' }}>
              <Card.Body className="d-flex align-items-center">
                <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.icon}</div>
                <div>
                  <Card.Title style={{ marginBottom: 0 }}>{item.label}</Card.Title>
                  <Card.Text>{item.value}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}

          <h2 style={{ color: '#024CAA' }}>Contato</h2>
          {contato.map((item, index) => (
            <Card key={index} className="mb-3" style={{ backgroundColor: '#024CAA', color: '#AFEFFD' }}>
              <Card.Body className="d-flex align-items-center">
                <div style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.icon}</div>
                <div>
                  <Card.Title style={{ marginBottom: 0 }}>{item.label}</Card.Title>
                  <Card.Text>{item.value}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Terceira coluna */}
        <Col md={6}>
        <Painel historico={historico} agendamento={agendamento} id={id}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
