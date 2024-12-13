import axios from "axios";
import { useState, useEffect } from "react";

const useDia = () => {
  const [agendamentos, setAgendamentos] = useState({
    today: '0',
    agendamentos: [], // Inicializa como um array vazio
  });

  const handleAgendamentos = async () => {
    try {
      const today = new Date();
      // Extrai apenas a parte da data no formato "YYYY-MM-DD"
      const dia = today.toISOString().split('T')[0];
      const retorno = await axios.post(`http://localhost:6990/example/dia`, {
        dia: dia,
      });
      setAgendamentos(retorno.data);
      console.log(retorno.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    handleAgendamentos();
  }, []);

  return {
    agendamentos,
  };
};

export default useDia;
