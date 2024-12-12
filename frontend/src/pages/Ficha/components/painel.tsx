import { Container } from "react-bootstrap";
import { PainelNavbar } from "./navbarPainel";
import { PainelConteudo } from "./painelConteudo";
import usePainel from "../hooks/usePainel";
import { Historico } from "../hooks/typeMock";

interface PainelProps {
  id: string;
  agendamento: string | null;
  historico: Historico;
}

const Painel = ({ id, agendamento, historico }: PainelProps) => {
  const {
    conteudo,
    novaData,
    novaHora,
    agendamentoAtual,
    handleNavClick,
    handleAgendar,
    setNovaData,
    setNovaHora,
  } = usePainel(agendamento, id);

  return (
    <Container fluid>
      <PainelNavbar conteudo={conteudo} onNavClick={handleNavClick} />
      <Container
        className="mt-5"
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "10px",
        }}
      >
        <h1>{conteudo}</h1>
        <PainelConteudo
          conteudo={conteudo}
          historico={historico}
          agendamentoAtual={agendamentoAtual}
          novaData={novaData}
          novaHora={novaHora}
          onAgendar={handleAgendar}
          setNovaData={setNovaData}
          setNovaHora={setNovaHora}
        />
      </Container>
    </Container>
  );
};

export default Painel;
