import axios from "axios";
import { useState, useEffect } from "react";

const useDia = () => {

    const [agendamentos, setAgendamentos] = useState({
        agendamentos: [], // Inicializa como um array vazio
      });
    const handleAgendamentos = async () => {
        try {
            const dia = new Date().toISOString();
            const retorno = await axios.post(`http://localhost:6990/example/dia`, {
                dia: dia
            });
            setAgendamentos(retorno.data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    useEffect(() => {
        handleAgendamentos();
    }, []);

    return {
        agendamentos,
    };

}



export default useDia;