import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCadastroService } from "../services/useCadastroService";


export const useCadastroForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      nome: "",
      genero: "",
      sexualidade: "",
      etnia: "",
      estadoCivil: "",
      dataNascimento: "",
      naturalidade: "",
      nacionalidade: "",
      idFoto: "",
      profissao: "",
      email: "",
      telefone: "",
      contatoEmergencia: {
        nome: "",
        parentesco: "",
        telefone: "",
      },
    });
  
    const { loading, data, error, fetchData } = useCadastroService({ paciente: formData });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (formData.idFoto === "") {
        formData.idFoto = (Math.floor(Math.random() * 11) + 1).toString();
      }
      console.log(formData);
      try {
        await fetchData(); 
        if (data) {
          navigate(`/menu`);
        }
      } catch {
        alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
      }
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      if (name.startsWith("contatoEmergencia")) {
        const key = name.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          contatoEmergencia: { ...prev.contatoEmergencia, [key]: value },
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    };
  
    const setFoto = (foto: string) => setFormData((prev) => ({ ...prev, foto }));
  
    return { formData, handleChange, setFoto, handleSubmit, loading, error };
  };
  