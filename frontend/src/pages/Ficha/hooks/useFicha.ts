import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Historico } from "../../Ficha/hooks/typeMock";


interface PacienteInterno {
    id: string;
    nome: string;
    genero: string;
    sexualidade: string;
    etnia: string;
    estadoCivil: string;
    dataNascimento: string;
    naturalidade: string;
    nacionalidade: string;
    idFoto: string;
    profissao: string;
    email: string;
    telefone: string;
    agendamento : string | null;
    contatoEmergencia: {
        nome: string;
        parentesco: string;
        telefone: string;
    };
}

const useFichaTesta = () => {
    
    const [paciente, setPaciente] = useState<PacienteInterno | null>(null);
    const [id] = useState<string>(useParams<{ id: string }>().id || "Mock"); // Estado para armazenar o ID
    const [historico, setHistorico] = useState<Historico>({ resumo: [], consultas: [], notas: [] });
    const [agendamento, setAgendamento] = useState<string>("");

    const handleMock = () => {
        setPaciente({
            id: "1",
            nome: "Fulano",
            genero: "Masculino",
            sexualidade: "Heterossexual",
            etnia: "Branco",
            estadoCivil: "Casado",
            dataNascimento: "01/01/2000",
            naturalidade: "Brasileiro",
            nacionalidade: "Brasil",
            idFoto: "https://via.placeholder.com/150",
            profissao: "Desenvolvedor",
            email: "askk@meme.com",
            telefone: "123456789",
            contatoEmergencia: {
                nome: "Ciclano",
                parentesco: "Irmão",
                telefone: "987654321"
            },
            agendamento: null
        });
    }

    const handleFetch = async (id : string) => {
        try {
            const response = await axios.post("http://localhost:6990/example/ficha", {
                id: id,
            });

            // Valida e seta os dados corretamente
            if (response.data.paciente && typeof response.data.paciente === "object") {
                setPaciente(response.data.paciente);
                setAgendamento(response.data.paciente.agendamento);
                setHistorico(response.data.historico);
            } else {
                console.error("Formato inesperado de resposta:", response.data);
                setPaciente(null);
            }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setPaciente(null);
    }
}


useEffect(() => {
  document.title = "Ficha do Paciente";
    handleFetch(id);
}, [id]);

return {
    paciente,
    handleMock,
    handleFetch,
    id,
    agendamento, setAgendamento, 
    historico
};
}

export default useFichaTesta;