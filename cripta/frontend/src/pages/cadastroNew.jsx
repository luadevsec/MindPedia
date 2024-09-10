import React, { useState } from 'react';
import SectionForm from '../components/cadastro/sectionForm';
import CampoCadastro from '../components/cadastro/campoCadastro';
import CampoSelect from '../components/cadastro/campoSelect';
import './cadastroNew.css';

const generoOptions = [
    { value: 'outro', label: 'Outro' },
    { value: 'naobinario', label: 'Não-Binário' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'masculino', label: 'Masculino' }
];

const sexualidadeOptions = [
    { value: 'outro', label: 'Outro' },
    { value: 'assexual', label: 'Assexual' },
    { value: 'heterossexual', label: 'Heterossexual' },
    { value: 'homossexual', label: 'Homossexual' },
    { value: 'bissexual', label: 'Bissexual' },
    { value: 'pansexual', label: 'Pansexual' }
];

const etniaOptions = [
    { value: 'outra', label: 'Outra' },
    { value: 'branca', label: 'Branca' },
    { value: 'negra', label: 'Negra' },
    { value: 'indigena', label: 'Indígena' },
    { value: 'parda', label: 'Parda' },
    { value: 'amarela', label: 'Amarela' },
    { value: 'asiatica', label: 'Asiática' }
];

const estadoCivilOptions = [
    { value: 'outro', label: 'Outro' },
    { value: 'solteiro', label: 'Solteiro' },
    { value: 'casado', label: 'Casado' },
    { value: 'divorciado', label: 'Divorciado' },
    { value: 'viuvo', label: 'Viúvo' }
];

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        sexualidade: '',
        genero: '',
        numero: '',
        numeroAux: '',
        email: '',
        estadoCivil: '',
        profissao: '',
        etnia: '',
        hobby: ''
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.erro || 'Erro ao cadastrar paciente');
            }

            const data = await response.json();
            setStatusMessage('Paciente cadastrado com sucesso!');
            console.log('Paciente cadastrado:', data);
        } catch (error) {
            setError(error.message);
            console.error('Erro:', error);
        }
    };

    return (
        <div className='cadastro-body-container'>
            <header className='cadastro-header-container'>
                <h1>Cadastro de Paciente</h1>
            </header>
            <main className='cadastro-main-section'>
                <form className='cadastro-form' onSubmit={handleSubmit}>
                    <SectionForm section_name="Ficha básica">
                        <CampoCadastro
                            label="Nome"
                            name="nome"
                            type="text"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                        <CampoCadastro
                            label="CPF"
                            name="cpf"
                            type="text"
                            value={formData.cpf}
                            onChange={handleInputChange}
                        />
                        <CampoCadastro
                            label="Data de Nascimento"
                            name="dataNascimento"
                            type="date"
                            value={formData.dataNascimento}
                            onChange={handleInputChange}
                        />
                        <CampoSelect
                            label="Gênero"
                            name="genero"
                            options={generoOptions}
                            value={formData.genero}
                            onChange={handleInputChange}
                        />
                        <CampoSelect
                            label="Sexualidade"
                            name="sexualidade"
                            options={sexualidadeOptions}
                            value={formData.sexualidade}
                            onChange={handleInputChange}
                        />
                    </SectionForm>

                    <SectionForm section_name="Ficha de contato">
                        <CampoCadastro
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required={true}
                        />
                        <CampoCadastro
                            label="Telefone"
                            name="numero"
                            type="tel"
                            value={formData.numero}
                            onChange={handleInputChange}
                        />
                        <CampoCadastro
                            label="Número Auxiliar"
                            name="numeroAux"
                            type="tel"
                            value={formData.numeroAux}
                            onChange={handleInputChange}
                        />
                    </SectionForm>

                    <SectionForm section_name="Informações adicionais">
                        <CampoSelect
                            label="Etnia"
                            name="etnia"
                            options={etniaOptions}
                            value={formData.etnia}
                            onChange={handleInputChange}
                        />
                        <CampoCadastro
                            label="Atuação Profissional"
                            name="profissao"
                            type="text"
                            value={formData.profissao}
                            onChange={handleInputChange}
                        />
                        <CampoSelect
                            label="Estado Civil"
                            name="estadoCivil"
                            options={estadoCivilOptions}
                            value={formData.estadoCivil}
                            onChange={handleInputChange}
                        />
                        <CampoCadastro
                            label="Hobby"
                            name="hobby"
                            type="text"
                            value={formData.hobby}
                            onChange={handleInputChange}
                        />
                    </SectionForm>

                    <input className='cadastro-submit' type="submit" value="Cadastrar Paciente" />
                </form>
                {statusMessage && <p className='status-message'>{statusMessage}</p>}
                {error && <p className='error-message'>{error}</p>}
            </main>
        </div>
    );
};

export default Cadastro;
