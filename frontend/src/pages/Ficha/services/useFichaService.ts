import { Method } from "axios";
import useFetch from "../../../hooks/useFetch";
import {  Historico } from "../hooks/typeMock";
import {  PacienteFichado } from "../../../contexts/paciente";

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

export default usePacienteService;