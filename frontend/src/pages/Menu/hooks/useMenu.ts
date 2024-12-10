// hooks/useMenu.ts
import { useState } from "react";
import { Contato } from "../components/contatoCard";

export const useMenu = () => {
  const contatogeralmock: Contato[] = [
    {
      foto: "5",
      nome: "Fulano",
      consulta: "26/09 - 15:00",
      id: "3",
      today: false,
    },
    {
      foto: "2",
      nome: "Fulano",
      consulta: "26/09 - 17:00",
      id: "4",
      today: false,
    },
    {
      foto: "4",
      nome: "Fulano",
      consulta: "27/09 - 14:00",
      id: "5",
      today: false,
    },
  ];

  const [contatoAtual, setContatoAtual] = useState(contatogeralmock[0]);

  const handleContatoClick = (contato: Contato) => {
    setContatoAtual(contato);
  };

  return {
    contatogeralmock,
    contatoAtual,
    handleContatoClick,
  };
};
