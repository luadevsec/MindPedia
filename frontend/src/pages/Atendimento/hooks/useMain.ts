import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useConsultaService } from "../services/consultaService";
import { CargaConsultar } from "../../../contexts/cargaConsultar";
import useDate from "../../../utils/useDate";

interface useMainProps {
  idPaciente: string;
}

const useMain = ({ idPaciente }: useMainProps) => {
  const [resumo, setResumo] = useState<string>("");
  const [notas, setNotas] = useState<string>("");

  const [req, setReq] = useState<CargaConsultar>({
    consulta: {id: "", data: "", resumo: null, notas: null },
  });

  const { getCurrentDate } = useDate(); // Hook de data
  const navigate = useNavigate();

  // Usando o service de consulta para pegar dados da consulta
  const { loading, data, error, fetchData } = useConsultaService(req);

  useEffect(() => {
    if (req.consulta.id && idPaciente !== "mock") {
      console.log("Fetching data...");
      try {
        fetchData();
        if (error) {
          console.error(error);
        }
      } catch (err: unknown) {
        console.error(err);
      } finally {
        console.log(`Data fetched: ${data?.message}`);
      }
    }
    if (req.consulta.id) {
      navigate(`/ficha/${idPaciente}`); // Vai para a ficha
    }
  }, [req, error, idPaciente, data, navigate, fetchData]); // Só executa quando 'req' for atualizado

  const handleFinalizar = async () => {
    // Obtém a data no formato ReturnDate (inclui o objeto raw Date)
    const currentDate = getCurrentDate();

    // Atualiza o 'req' com os dados completos
    const payload: CargaConsultar = {
      consulta: {
        id: idPaciente,
        data: currentDate.date.raw, // Usa o raw Date formatado para string ISO
        resumo,
        notas,
      },
    };

    console.log(payload);
    setReq(payload); // Atualiza 'req' com os dados completos
  };

  const handleCancelar = () => {
    navigate("/menu"); // Vai para o menu
  };

  return {
    resumo,
    setResumo,
    notas,
    setNotas,
    loading,
    handleFinalizar,
    handleCancelar,
  };
};

export { useMain };
