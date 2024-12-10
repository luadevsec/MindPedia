import { useState, useEffect } from "react";
import { Contato } from "../components/contatoCard";
import useContatoAllService from "../services/useContatoAllService"; // Certifique-se de ajustar o caminho

export const useMenu = () => {
  // Consumindo o serviço de contatos
  const { contatos, loading, error, fetchData } = useContatoAllService();

  // Estado do contato atual
  const [contatoAtual, setContatoAtual] = useState<Contato | null>(null);

  // Mock de contatos (caso o serviço ainda não tenha retornado)
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

  // Carregar os dados ao montar o componente (se ainda não tiver sido feito)
  useEffect(() => {
    if (!contatos.length) {
      fetchData(); // Carrega os dados do serviço
    }
  }, [contatos, fetchData]);

  // Usar os contatos reais, ou mock se ainda não tiverem sido carregados
  const contatosParaMostrar = contatos.length ? contatos : contatogeralmock;

  // Função para selecionar o contato atual
  const handleContatoClick = (contato: Contato) => {
    setContatoAtual(contato);
  };

  return {
    contatos: contatosParaMostrar, // Retorna os contatos reais ou mockados
    contatoAtual,
    loading,
    error,
    handleContatoClick,
  };
};
