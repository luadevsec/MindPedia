import { Method } from "axios";
import  useFetch from "../../../hooks/useFetch";
import useDate from "../../../utils/useDate"; // Supondo que você tenha um hook ou função para lidar com datas
import Contato from "./contato";
interface Res {
    paciente: {
        id: string;
        nome: string;
        foto: string;
        consulta: string;
    }[];
}

interface Req {
    
    password: string;
}

const useContatoAllService = () => {
    const config = {
        endpoint: "/example/contato",
        method: "GET" as Method,
    };
    const req = { password : "123456" }; // Supondo que você tenha um hook ou função para lidar com datas

    // Usando useFetch para obter os dados dos pacientes
    const { data, loading, error, fetchData } = useFetch<Req, Res>({ config, req });
    const { getCurrentDate } = useDate(); // Supondo que você tenha uma função hook ou utilitário para obter a data atual

    // Função para transformar os dados e adicionar o campo 'today'
    const transformData = (pacientes: Res["paciente"]): Contato[] => {
        const today = getCurrentDate(); // Supondo que você tenha uma função hook ou utilitário para obter a data atual

        return pacientes.map((paciente) => {
            // Verificar se o agendamento é hoje
            const isToday = paciente.consulta.includes(today.date.raw); // Pode ser necessário formatar a data corretamente

            return {
                id: paciente.id,
                nome: paciente.nome,
                foto: paciente.foto,
                consulta: paciente.consulta,
                agendamento: paciente.consulta,
                today: isToday,
            };
        });
    };

    // Se os dados foram carregados, transformamos e retornamos
    const contatos = data ? transformData(data.paciente) : [];

    return { contatos, loading, error, fetchData };
};

export default useContatoAllService;
