import axios, { Method } from 'axios';

interface FetchProps {
    config: {
        endpoint: string;
        method: Method; // Melhor tipagem para métodos HTTP
    };
    request?: any; // Torne `request` opcional, caso não seja necessário em alguns casos
}

const fetch = async ({ config, request }: FetchProps) => {
    const { endpoint, method } = config;

    try {
        const response = await axios({
            url: endpoint,
            method: method,
            data: request, // Use `data` para o corpo da requisição
        });
        return response.data; // Retorna apenas os dados relevantes
    } catch (error) {
        // Trate erros apropriadamente
        console.error("Erro na requisição:", error);
        throw error;
    }
};

export default fetch;