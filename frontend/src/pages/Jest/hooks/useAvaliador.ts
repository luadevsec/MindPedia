import { useState } from "react";

const useAvaliador = (inputname: string) => {
    const [avaliador, setAvaliador] = useState<boolean>(false); // Mudança para booleano

    const chave = 'tqs';
    const [avaliadorador, setAvaliadorador] = useState<string>(inputname);

    // Use the avaliadorador state variable
    console.log(avaliadorador);

    const atualizarAvaliadorador = (nome: string) => {
        setAvaliadorador(nome);

        // Verifica se o nome é 'tqs' e atualiza o estado de 'avaliador'
        if (nome.toLowerCase() === chave) {
            setAvaliador(true);
        } else {
            setAvaliador(false);
        }
    };

    return { avaliador, avaliadorador: atualizarAvaliadorador }; // Retorna o booleano 'avaliador'
};

export default useAvaliador;
