import { Container } from 'react-bootstrap'
import { Paciente } from '../../../contexts/paciente';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Ficha = () => {

    const [paciente, setPaciente] = useState<Paciente | null>(null);
    const [id, setId] = useState<string>("");

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


    return (
        <Container>
            <h1>Ficha</h1>

            {paciente && (
                <>
                    <h2>{paciente.nome}</h2>
                    <p>{paciente.genero}</p>
                    <p>{paciente.sexualidade}</p>
                    <p>{paciente.etnia}</p>
                    <p>{paciente.estadoCivil}</p>
                    <p>{paciente.dataNascimento}</p>
                    <p>{paciente.naturalidade}</p>
                    <p>{paciente.nacionalidade}</p>
                    <p>{paciente.foto}</p>
                    <p>{paciente.profissao}</p>
                    <p>{paciente.email}</p>
                    <p>{paciente.telefone}</p>
                    <p>{paciente.contatoEmergencia.nome}</p>
                    <p>{paciente.contatoEmergencia.parentesco}</p>
                    <p>{paciente.contatoEmergencia.telefone}</p>
                    <p>{paciente.agendamento || "Sem agendamento"}</p>
                </>
            )}

            <button onClick={handleMock}>Mock</button>
            <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
            <button onClick={() => handleFetch(id)}>Fetch</button>
        </Container>
    );
}

export default Ficha;