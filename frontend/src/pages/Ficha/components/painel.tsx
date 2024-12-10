import { Container } from "react-bootstrap";
import { PainelNavbar } from "./navbarPainel";
import { PainelConteudo } from "./painelConteudo";
import usePainel from "../hooks/usePainel";
import { Historico, Agendamento } from "../hooks/typeMock";

interface PainelProps {
  historico: Historico;
  agendamento: Agendamento | null;
}

const Painel = ({ historico, agendamento }: PainelProps) => {
  const {
    conteudo,
    novaData,
    novaHora,
    agendamentoAtual,
    handleNavClick,
    handleAgendar,
    setNovaData,
    setNovaHora,
  } = usePainel(historico, agendamento);

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
