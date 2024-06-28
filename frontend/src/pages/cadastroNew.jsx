import React from 'react';
import SectionForm from '../components/cadastro/sectionForm';
import CampoCadastro from '../components/cadastro/campoCadastro';
import CampoSelect from '../components/cadastro/campoSelect';
import './cadastroNew.css';

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

const estadoCivilOptions = [
    { value: 'solteiro', label: 'Solteiro' },
    { value: 'casado', label: 'Casado' },
    { value: 'divorciado', label: 'Divorciado' },
    { value: 'viuvo', label: 'Viúvo' },
    { value: 'outro', label: 'Outro' }
];

const Cadastro = () => {
    return (
        <div className='cadastro-body-container'>
            <header className='cadastro-header-container'>
                <h1>Cadastro de Paciente</h1>
            </header>
            <main className='cadastro-main-section'>
                <form className='cadastro-form'>
                    <SectionForm section_name="Ficha básica">
                        <CampoCadastro label="Nome" name="nome" type="text" />
                        <CampoCadastro label="CPF" name="cpf" type="text" />
                        <CampoCadastro label="Data de Nascimento" name="data_nascimento" type="date" />
                        <CampoSelect label="Gênero" name="genero" options={generoOptions} />
                        <CampoSelect label="Sexualidade" name="sexualidade" options={sexualidadeOptions} />
                    </SectionForm>

                    <SectionForm section_name="Ficha de contato">
                        <CampoCadastro label="Email" name="email" type="email" required={true} />
                        <CampoCadastro label="Telefone" name="telefone" type="tel" />
                        <CampoCadastro label="Número Auxiliar" name="numero_auxiliar" type="tel" />
                    </SectionForm>

                    <SectionForm section_name="Informações adicionais">
                        <CampoSelect label="Etnia" name="etnia" options={etniaOptions} />
                        <CampoCadastro label="Atuação Profissional" name="atuacao_profissional" type="text" />
                        <CampoSelect label="Estado Civil" name="estado_civil" options={estadoCivilOptions} />
                        <CampoCadastro label="Hobby" name="hobby" type="text" />
                    </SectionForm>

                    <input className='cadastro-submit' type="submit" value="Cadastrar Paciente" />
                </form>
            </main>
        </div>
    );
};

export default Cadastro;
