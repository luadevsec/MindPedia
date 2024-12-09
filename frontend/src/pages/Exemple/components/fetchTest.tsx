import { Button, Form, Alert, Container, Row, Col } from "react-bootstrap";
import useUsernameVerification from "../hooks/useUserVerification";

const UsernameVerification = () => {
    const {
        username,
        setUsername,
        loading,
        data,
        error,
        handleVerify,
    } = useUsernameVerification();

    return (
        <Container className="my-4">
            <Row>
                <Col md={6} className="mx-auto">
                    <h2>Verificar Nome de Usuário</h2>
                    <Form onSubmit={handleVerify}>
                        <Form.Group controlId="usernameInput">
                            <Form.Label>Nome de Usuário</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={loading || !username}
                            className="mt-3"
                        >
                            {loading ? "Verificando..." : "Verificar"}
                        </Button>
                    </Form>

                    {/* Mensagem de erro */}
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

                    {/* Mensagem de sucesso */}
                    {data && <Alert variant="success" className="mt-3">{data.message}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default UsernameVerification;
