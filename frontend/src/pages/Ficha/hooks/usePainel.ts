import { useState } from "react";
import { Historico, Agendamento } from "../hooks/typeMock";
import useAgendarService from "../services/useAgendarService";
import useDate from "../../../utils/useDate";
import { useParams } from "react-router-dom";

const usePainel = (historico: Historico, agendamento: Agendamento | null) => {
  const [conteudo, setConteudo] = useState<string>("Geral");
  const [novaData, setNovaData] = useState<string>("");
  const [novaHora, setNovaHora] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const [agendamentoAtual, setAgendamentoAtual] = useState<Agendamento | null>(agendamento);
  const { error: errorFetch , sendData } = useAgendarService({ agendamento: "", id : id });
  const { convertCustomToISO } = useDate();

  const handleNavClick = (link: string) => {
    setConteudo(link);
  };

  const handleAgendar = async () => {
    if (novaData && novaHora) {
      const novoAgendamentoISO = convertCustomToISO(novaData, novaHora).date.raw;
  
      try {
        if (id)
        await sendData({
          config: {
            endpoint: "/example/agendar",
            method: "POST",
          },
          req: { agendamento: novoAgendamentoISO, id: id },
        });
        
        if (errorFetch) console.error(errorFetch);
        setAgendamentoAtual({ data: novaData, hora: novaHora });
        alert(`Consulta agendada para ${novaData} às ${novaHora}`);
        setConteudo("Geral");
      } catch (error) {
        if (errorFetch) console.error(errorFetch);
        console.error(error);
      } finally {
        setNovaData("");
        setNovaHora("");
      }
    } else {
      alert("Por favor, preencha todos os campos para agendar.");
    }
  };
  

  return {
    conteudo,
    novaData,
    novaHora,
    agendamentoAtual,
    handleNavClick,
    handleAgendar,
    setNovaData,
    setNovaHora,
  };
};

export default usePainel;