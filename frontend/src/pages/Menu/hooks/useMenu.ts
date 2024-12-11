import { useState, useEffect, useCallback } from "react";
import { Contato } from "../components/contatoCard";
import useContatoAllService from "../services/useContatoAllService";

export const useMenu = () => {
  const { contatos, loading, error, fetchData } = useContatoAllService();
  const [contatoAtual, setContatoAtual] = useState<Contato | null>(null);

  // Memoiza a chamada para evitar loops devido a recriação de fetchData
  const fetchContatos = useCallback(() => {
    if (!loading && (!contatos || contatos.length === 0)) {
      fetchData();
    }
  }, [fetchData, loading, contatos]);

  // Garante que fetchData só será chamado uma vez quando necessário
  useEffect(() => {
    fetchContatos();
  }, []);

  const handleContatoClick = (contato: Contato) => {
    setContatoAtual(contato);
  };

  return {
    contatos,
    contatoAtual,
    loading,
    error,
    handleContatoClick,
  };
};
