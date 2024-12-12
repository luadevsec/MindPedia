import { Form, Button } from "react-bootstrap";
import { Historico, Consulta, Agendamento } from "../hooks/typeMock";

interface PainelConteudoProps {
  conteudo: string;
  historico: Historico;
  agendamentoAtual: string | null;
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
  // Função utilitária para converter ISOString para uma data formatada
  const formatDate = (isoString: string): Agendamento | null => {
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime())) {
        return null; // Retorna null se a data for inválida
      }
      return {
        data: `${date.getDate().toString().padStart(2, "0")}/${
          (date.getMonth() + 1).toString().padStart(2, "0")
        }/${date.getFullYear()}`,
        hora: `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes()
          .toString()
          .padStart(2, "0")}`,
      };
    } catch {
      return null;
    }
  };

  const agendamentobonito = agendamentoAtual ? formatDate(agendamentoAtual) : null;

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
            Próxima consulta: {agendamentobonito?.data || "ainda não agendado"}{" "}
            {agendamentobonito?.hora ? `às ${agendamentobonito.hora}` : ""}
          </p>
          <p>
            Última consulta: {historico.consultas?.[0]?.data || "N/A"}
          </p>
          <p>
            Última nota: {historico.notas?.[0] || "N/A"}
          </p>
          <p>
            Último resumo: {historico.resumos?.[0] || "N/A"}
          </p>

        </>
      );

    case "Resumos":
      return historico.resumos?.length > 0 ? (
        historico.resumos.map((item: string, index: number) => (
          <div key={index}>
            <p>
              {item}
            </p>
            <hr />
          </div>
        ))
      ) : (
        <p>Nenhum resumo disponível.</p>
      );

    case "Consultas":
      return historico.consultas?.length > 0 ? (
        historico.consultas.map((item: Consulta, index: number) => (
          <div key={index}>
            <p>
              <strong>Data:</strong> {item.data}
            </p>
            <p>
              <strong>Resumo:</strong>{" "}
              {typeof item.resumo === "object" && item.resumo
                ? item.resumo.conteudo
                : item.resumo || "N/A"}
            </p>
            <p>
              <strong>Notas:</strong>{" "}
              {typeof item.notas === "object" && item.notas
                ? item.notas.conteudo
                : item.notas || "N/A"}
            </p>
            <hr />
          </div>
        ))
      ) : (
        <p>Nenhuma consulta disponível.</p>
      );

    case "Notas":
      return historico.notas?.length > 0 ? (
        historico.notas.map((item: string, index: number) => (
          <div key={index}>
            <p>
              {item}
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


export default PainelConteudo;