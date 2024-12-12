import { useState } from "react";
import useDate from "../../../utils/useDate";
import axios from "axios";

const usePainel = (agendamento: string | null, id : string) => {
  const [conteudo, setConteudo] = useState<string>("Geral");
  const [novaData, setNovaData] = useState<string>("");
  const [novaHora, setNovaHora] = useState<string>("");
  const { convertCustomToISO } = useDate();
  const [agendamentoAtual, setAgendamentoAtual] = useState<string | null>(agendamento);

  const handleNavClick = (link: string) => {
    setConteudo(link);
  };

  const handleAgendar = async () => {
    if (novaData && novaHora) {
      const novoAgendamentoISO = convertCustomToISO(novaData, novaHora).date.raw;

      try{
        await axios.post(`/example/agendar`, {
          id: id,
          agendamento: novoAgendamentoISO,
        });
        setAgendamentoAtual(novoAgendamentoISO);
        alert(`Consulta agendada para ${novaData} às ${novaHora}`);
        setConteudo("Geral");
      } catch (error) {
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