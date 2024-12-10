import { Form, Button } from "react-bootstrap";
import { Historico, Resumo, Consulta, Nota, Agendamento } from "../hooks/typeMock";

interface PainelConteudoProps {
  conteudo: string;
  historico: Historico;
  agendamentoAtual: Agendamento | null;
  novaData: string;
  novaHora: string;
  onAgendar: () => void;
  setNovaData: (data: string) => void;
  setNovaHora: (hora: string) => void;
}

export const PainelConteudo = ({
  conteudo,
  historico,
  agendamentoAtual,
  novaData,
  novaHora,
  onAgendar,
  setNovaData,
  setNovaHora,
}: PainelConteudoProps) => {
  switch (conteudo) {
    case "Agendar":
      return (
        <Form>
          <Form.Group>
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              value={novaData}
              onChange={(e) => setNovaData(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              value={novaHora}
              onChange={(e) => setNovaHora(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={onAgendar}>
            Agendar
          </Button>
        </Form>
      );

    case "Geral":
      return (
        <>
          <p>
            Próxima consulta: {agendamentoAtual?.data || "ainda não agendado"}{" "}
            {agendamentoAtual?.hora ? `às ${agendamentoAtual.hora}` : ""}
          </p>
          <p>Última consulta: {historico.consultas[0]?.data || "N/A"}</p>
          <p>Última nota: {historico.notas[0]?.conteudo || "N/A"}</p>
          <p>Último resumo: {historico.resumo[0]?.conteudo || "N/A"}</p>
        </>
      );

    // Casos para Resumos, Consultas e Notas seguem o mesmo padrão
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
              <p><strong>Data:</strong> {item.data}</p>
              <p><strong>Resumo:</strong> {typeof item.resumo === "object" && item.resumo ? item.resumo.conteudo : item.resumo || "N/A"}</p>
              <p><strong>Notas:</strong> {typeof item.notas === "object" && item.notas ? item.notas.conteudo : item.notas || "N/A"}</p>
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

    // Repetição do mesmo padrão para Consultas e Notas
    default:
      return <p>Selecione uma seção para visualizar os dados.</p>;
  }
};
