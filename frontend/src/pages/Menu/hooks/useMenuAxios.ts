import axios from "axios";
import { useState, useEffect } from "react";
import { Contato } from "../components/contatoCard";


const useMenuAxios = () => {
    const [contact, setContact] = useState([]);
    const [contatoAtual, setContatoAtual] = useState(null);
    const [unicDays, setUnicDays] = useState([]);

    const handleContatoClick = (contato: Contato) => {
        setContatoAtual(contato);
      };


    const handleFetch = async () => {
        try {
            const response = await axios.post("http://localhost:6990/user/all", {
                password: "123456",
            });
    
            // Valida e seta os dados corretamente
            if (response.data && Array.isArray(response.data.pacientes)) {
                setContact(response.data.pacientes);
                setContatoAtual(response.data.pacientes[0]);
            } else {
                console.error("Formato inesperado de resposta:", response.data);
                setContact([]);
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            setContact([]);
        }
    };

    const handleUnicDays = async () => {
        try {
            const response = await axios.get("http://localhost:6990/user/uniqueDays");
            
            if (response.data && Array.isArray(response.data.dias)) {
                setUnicDays(response.data.dias);
            } else {
                console.error("Formato inesperado de resposta:", response.data);
                setUnicDays([]);
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            setUnicDays([]);
        } finally {
            console.log('Dias unicos:', unicDays);
        }
    }


    useEffect(() => {
        handleFetch();
        handleUnicDays();
    }, []);

    return {
        contatos :contact,
        handleFetch,
        handleContatoClick,
        unicDays,
        contatoAtual,
    };
}

export default useMenuAxios;