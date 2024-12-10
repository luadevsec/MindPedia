import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import Cardme from "./components/card";
import ContatoCard from "./components/contatoCard";
import { Contato } from "./components/contatoCard";


const Menu = () => {

    const contatomok = {
        nome: "Fulano",
        email: "kakdakskW@ksakks.com",
        telefone: "999999999"
    }

    const contatomok2 : Contato = {
        foto: "https://via.placeholder.com/60",
        nome: "Fulano",
        consulta: "25/09 - 8:00",
        id: "1",
        today: true
    }

    const contatogeralmock : Contato[] = [
        {
            foto: "https://via.placeholder.com/60",
            nome: "Fulano",
            consulta: "25/09 - 10:00",
            id: "1",
            today: true
        },
        {
            foto: "https://via.placeholder.com/60",
            nome: "Fulano",
            consulta: "25/09 - 14:00",
            id: "2",
            today: true
        },
        {
            foto: "https://via.placeholder.com/60",
            nome: "Fulano",
            consulta: "26/09 - 15:00",
            id: "3",
            today: false
        },
        {
            foto: "https://via.placeholder.com/60",
            nome: "Fulano",
            consulta: "26/09 - 17:00",
            id: "4",
            today: false
        },
        {
            foto: "https://via.placeholder.com/60",
            nome: "Fulano",
            consulta: "27/09 - 14:00",
            id: "5",
            today: false
        }]
    
    return (
        <>
            <Header />

            <Container fluid>
                <Row>
                    <Col className="bg-primary" md={9}>
                        <Row>
                            <Col>
                                <h1>Atual</h1>
                            </Col>
                            <Col>
                                <h1>calendario</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="bg-info" md={3}>
                        <ContatoCard contato = {contatomok2}/>
                        {contatogeralmock.map((contato) => (
                            <ContatoCard contato={contato} key={contato.id} />
                        ))}
                    </Col>
                </Row>
            </Container>

            

            
        </>
    );
}

export default Menu;