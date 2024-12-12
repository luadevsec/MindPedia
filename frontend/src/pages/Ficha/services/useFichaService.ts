import { Method } from "axios";
import useFetch from "../../../hooks/useFetch";
import {  Historico } from "../hooks/typeMock";
import {  PacienteFichado } from "../../../contexts/paciente";
import axios from "axios";
import { useState, useEffect } from "react";
import { Paciente } from "../../Ficha/hooks/typeMock";

interface Res {
    paciente: PacienteFichado;
    historico: Historico;
}

interface Req {
    id: string;
}

const usePacienteService = (req: Req) => {
    const config = {
        endpoint: "example/ficha",
        method: "POST" as Method,
        
    };
    console.log('chegou aqui')

    const {data , error, sendData, loading, fetchData} = useFetch<Req, Res>({ config, req })
    console.log(loading)
    console.log(data)
    console.log(error)
    return {data, error, sendData, loading, fetchData};
}



const useFichaTesta = () => {
    
    const [paciente, setPaciente] = useState<Paciente | null>(null);
    const [id, setId] = useState<string>("");
    const [historico, setHistorico] = useState<string>("");
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
            foto: "https://via.placeholder.com/150",
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
    handleFetch("87d51803-2f69-4067-9ae3-234e45f46d0b");
}, []);

return {
    paciente,
    handleMock,
    handleFetch,
    id, setId,
    agendamento, setAgendamento, 
    historico
};
}

export default useFichaTesta;