import axios from "axios";
import { useState, useEffect } from "react";
import { Contato } from "../components/contatoCard";


const useMenuAxios = () => {
    const [contact, setContact] = useState([]);
    const [contatoAtual, setContatoAtual] = useState(null);

    const handleContatoClick = (contato: Contato) => {
        setContatoAtual(contato);
      };

    const handleMock = () => {
        setContact([
            {
                id: 1,
                nome: "João",
                agendamento: "2021-09-01T13:00:00",
                today: false,
                foto: "joao",
            },
            {
                id: 2,
                nome: "Maria",
                agendamento: "2021-09-02T13:00:00",
                today: true,
                foto: "maria",
            },
            {
                id: 3,
                nome: "José",
                agendamento: "2021-09-03T13:00:00",
                today: false,
                foto: "jose",
            },
        ]);
    }

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

    useEffect(() => {
        handleFetch();
    }, []);

    return {
        contatos :contact,
        handleMock,
        handleFetch,
        handleContatoClick,
        contatoAtual,
    };
}

export default useMenuAxios;