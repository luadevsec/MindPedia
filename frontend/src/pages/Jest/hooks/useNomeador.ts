import { useState } from 'react';

const useNomeador = (inputname : string) => {
    const [nome, setNome] = useState<string>(inputname);
    
    const nomeador = (nome: string) => {
        setNome(nome);
    };
    
    return { nome, nomeador };
    }

    export default useNomeador;