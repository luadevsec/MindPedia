import React from "react";
import { useNavigate } from 'react-router-dom';
import SectionForm from "../components/cadastro/sectionForm";
import CampoSelect from "../components/cadastro/campoSelect";
import CampoCadastro from "../components/cadastro/campoCadastro";
import "../components/cadastro/style.css";

const Cadastro = () => {
    const navigate = useNavigate(); // Hook para navegação

    const pronomeOptions = [
        { value: 'ela', label: 'Ela' },
        { value: 'ele', label: 'Ele' },
        { value: 'neutral', label: 'Neutro' },
        { value: 'outro', label: 'Outro' }
    ];

    const faixaEtariaOptions = [
        { value: 'infantil', label: 'Infantil' },
        { value: 'adolescente', label: 'Adolescente' },
        { value: 'jovem', label: 'Jovem' },
        { value: 'adulto', label: 'Adulto' },
        { value: 'idoso', label: 'Idoso' }
    ];

    const generoOptions = [
        { value: 'feminino', label: 'Feminino' },
        { value: 'masculino', label: 'Masculino' },
        { value: 'naobinario', label: 'Não-Binário' },
        { value: 'outro', label: 'Outro' }
    ];

    const sexualidadeOptions = [
        { value: 'heterossexual', label: 'Heterossexual' },
        { value: 'homossexual', label: 'Homossexual' },
        { value: 'bissexual', label: 'Bissexual' },
        { value: 'pansexual', label: 'Pansexual' },
        { value: 'assexual', label: 'Assexual' },
        { value: 'outro', label: 'Outro' }
    ];

    const etniaOptions = [
        { value: 'branca', label: 'Branca' },
        { value: 'negra', label: 'Negra' },
        { value: 'indigena', label: 'Indígena' },
        { value: 'parda', label: 'Parda' },
        { value: 'amarela', label: 'Amarela' },
        { value: 'asiatica', label: 'Asiática' },
        { value: 'outra', label: 'Outra' }
    ];

    const tipoFamiliaOptions = [
        { value: 'nuclear', label: 'Nuclear' },
        { value: 'monoparental', label: 'Monoparental' },
        { value: 'extensa', label: 'Extensa' },
        { value: 'reconstituida', label: 'Reconstituída' },
        { value: 'outra', label: 'Outra' }
    ];

    const classeSocialOptions = [
        { value: 'classe-a', label: 'Classe A' },
        { value: 'classe-b', label: 'Classe B' },
        { value: 'classe-c', label: 'Classe C' },
        { value: 'classe-d', label: 'Classe D' },
        { value: 'classe-e', label: 'Classe E' }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        console.log('Formulário enviado');

        // Redirecionar para a página /menu
        navigate('/menu');
    };

    return (
        <div className="container">
            <h1>Formulário de Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <SectionForm section_name="Ficha básica">
                    <CampoCadastro label="Nome" name="nome" type="text" required={true} />
                    <CampoCadastro label="Sobrenome" name="sobrenome" type="text" />
                    <CampoSelect label="Pronome" name="pronome" options={pronomeOptions} />
                    <CampoSelect label="Faixa Etária" name="faixa-etaria" options={faixaEtariaOptions} />
                </SectionForm>

                <SectionForm section_name="Ficha de contato">
                    <CampoCadastro label="Email" name="email" type="email" required={true} />
                    <CampoCadastro label="Telefone" name="telefone" type="tel" />
                    <CampoCadastro label="Contato de Emergência" name="contato-emergencia" type="tel" />
                </SectionForm>

                <SectionForm section_name="Outras informações">
                    <CampoSelect label="Gênero" name="genero" options={generoOptions} />
                    <CampoSelect label="Sexualidade" name="sexualidade" options={sexualidadeOptions} />
                    <CampoCadastro label="Data de Nascimento" name="nascimento" type="date" required={true} />
                    <CampoSelect label="Etnia" name="etnia" options={etniaOptions} />
                    <CampoSelect label="Tipo de Família" name="tipo-familia" options={tipoFamiliaOptions} />
                    <CampoSelect label="Classe Social" name="classe-social" options={classeSocialOptions} />
                </SectionForm>

                <SectionForm section_name="Arquivos adicionais">
                    <CampoCadastro label="Inserir Arquivos" name="arquivos" type="file" />
                </SectionForm>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Cadastro;
