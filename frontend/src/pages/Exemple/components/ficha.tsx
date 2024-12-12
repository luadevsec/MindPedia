import { Container } from 'react-bootstrap'
import useFichaTesta from '../hooks/useFichaTesta';

const Ficha = () => {

    const { paciente, handleMock, handleFetch, id, setId, historico, agendamento, setAgendamento } = useFichaTesta();

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

            <h2>Historico</h2>
            <h3>consultas</h3>
            <ul>
                {paciente && historico.consultas.map((consulta) => (
                    <li key={consulta.data}>
                        <p>{consulta.data}</p>
                        <p>{consulta.resumo || "Sem resumo"}</p>
                        <p>{consulta.notas || "Sem notas"}</p>
                    </li>
                ))}
            </ul>

            <h3>notas</h3>
            <ul>
                {paciente && historico.notas.map((nota) => (
                    <li key={nota}>
                        <p>{nota}</p>
                    </li>
                ))}
            </ul>

            <h3>resumos</h3>
            <ul>
                {paciente && historico.resumos.map((resumo) => (
                    <li key={resumo}>
                        <p>{resumo}</p>
                    </li>
                ))}
            </ul>
            

            <button onClick={handleMock}>Mock</button>
            <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
            <button onClick={() => handleFetch(id)}>Fetch</button>
        </Container>
    );
}

export default Ficha;