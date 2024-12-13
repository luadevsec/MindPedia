import axios from "axios";
import { useState, useEffect } from "react";

const useDiatesta = () => {

    const [response, setResponse] = useState<any>(null);
    const handleAgendamentos = async () => {
        try {
            const dia = new Date().toISOString();
            setResponse(await axios.post(`http://localhost:6990/example/dia`, {
                dia: dia
            }))
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    useEffect(() => {
        handleAgendamentos();
    }, []);

    return {
        response,
    };

}



export default useDiatesta;