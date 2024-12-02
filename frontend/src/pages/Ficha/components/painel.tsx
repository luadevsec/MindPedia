import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { Historico, Resumo, Consulta, Nota, Agendamento } from "../hooks/typeMock";

interface PainelProps {
  historico: Historico;
  agendamento: Agendamento;
}

const Painel = ({ historico, agendamento }: PainelProps) => {
  const [conteudo, setConteudo] = useState<string>("Geral");

  const handleNavClick = (link: string) => {
    setConteudo(link);
  };

  const renderConteudo = () => {
    switch (conteudo) {
      case "Geral":
        return (
          <>
            <p>Próxima consulta: dia {agendamento.data} às {agendamento.hora}</p>
            <p>Última consulta: {historico.consultas[0]?.data || "N/A"}</p>
            <p>Última nota: {historico.notas[0]?.conteudo || "N/A"}</p>
            <p>Último resumo: {historico.resumo[0]?.conteudo || "N/A"}</p>
          </>
        );
      case "Resumos":
        return historico.resumo.length > 0 ? (
          historico.resumo.map((item: Resumo, index: number) => (
            <div key={index}>
              <p>
                <strong>Data:</strong> {item.data}
              </p>
              <p>
                <strong>Conteúdo:</strong> {item.conteudo}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p>Nenhum resumo disponível.</p>
        );
      case "Consultas":
        return historico.consultas.length > 0 ? (
          historico.consultas.map((item: Consulta, index: number) => (
            <div key={index}>
              <p>
                <strong>Data:</strong> {item.data}
              </p>
              <p>
                <strong>Resumo:</strong> {typeof item.resumo === "object" && item.resumo ? item.resumo.conteudo : item.resumo || "N/A"}
              </p>
              <p>
                <strong>Notas:</strong> {typeof item.notas === "object" && item.notas ? item.notas.conteudo : item.notas || "N/A"}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p>Nenhuma consulta disponível.</p>
        );
      case "Notas":
        return historico.notas.length > 0 ? (
          historico.notas.map((item: Nota, index: number) => (
            <div key={index}>
              <p>
                <strong>Data:</strong> {item.data}
              </p>
              <p>
                <strong>Conteúdo:</strong> {item.conteudo}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p>Nenhuma nota disponível.</p>
        );
      default:
        return <p>Selecione uma seção para visualizar os dados.</p>;
    }
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto">
          <Nav.Link
            href="#geral"
            onClick={() => handleNavClick("Geral")}
            active={conteudo === "Geral"}
          >
            Geral
          </Nav.Link>
          <Nav.Link
            href="#resumos"
            onClick={() => handleNavClick("Resumos")}
            active={conteudo === "Resumos"}
          >
            Resumos
          </Nav.Link>
          <Nav.Link
            href="#consultas"
            onClick={() => handleNavClick("Consultas")}
            active={conteudo === "Consultas"}
          >
            Consultas
          </Nav.Link>
          <Nav.Link
            href="#notas"
            onClick={() => handleNavClick("Notas")}
            active={conteudo === "Notas"}
          >
            Notas
          </Nav.Link>
        </Nav>
      </Navbar>

      
      <Container 
        className="mt-5"
        style={{
          maxHeight: '400px',  // Altere a altura conforme necessário
          overflowY: 'auto',
          border: '1px solid #ddd', // Para visualização
          padding: '10px',
        }}
      >
        
      <h1>{conteudo}</h1>
        {renderConteudo()}
      </Container>
    </Container>
  );
};

export default Painel;
