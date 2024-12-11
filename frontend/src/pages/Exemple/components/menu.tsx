import { Container } from "react-bootstrap";
import useMenuTesta from "../hooks/useMenuTesta";

const Menu = () => {

    
    const { contact, handleMock, handleFetch } = useMenuTesta();

    return (
        <Container>
            <h1>Menu</h1>
            {Array.isArray(contact) && contact.map((contact) => (
                <div key={contact.id}>
                    <h2>{contact.nome}</h2>
                    <p>{contact.consulta || "Sem consulta agendada"}</p>
                    <p>{contact.today ? "Hoje" : "Outro dia"}</p>
                    <p>{contact.foto || "Sem foto disponível"}</p>
                    <p>ID: {contact.id}</p>
                </div>
            ))}

            <button onClick={handleMock}>Mock</button>
            <button onClick={handleFetch}>Fetch</button>
        </Container>
    );
}

export default Menu;