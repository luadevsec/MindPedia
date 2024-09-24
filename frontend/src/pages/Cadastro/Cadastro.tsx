import React, { useState, ChangeEvent, FormEvent, ReactNode } from 'react';

// Tipagem das props dos componentes
interface SectionFormProps {
  section_name: string;
  children: ReactNode;
}

interface CampoSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface CampoCadastroProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Componentes

const SectionForm: React.FC<SectionFormProps> = ({ section_name, children }) => {
  return (
    <>
      <h2>{section_name}</h2>
      <section>
        {children}
      </section>
    </>
  );
};

const CampoSelect: React.FC<CampoSelectProps> = ({ label, name, options, required, value, onChange }) => {
  return (
    <article className="cadastro-field">
      <label htmlFor={name}>{label}:</label>
      <select name={name} id={name} value={value} required={required} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </article>
  );
};

const CampoCadastro: React.FC<CampoCadastroProps> = ({ label, name, type, required = false, value, onChange }) => {
  return (
    <article className="cadastro-field">
      <label htmlFor={name}>{label}:</label>
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
      />
    </article>
  );
};

// Opções
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

// Componente principal
const Cadastro: React.FC = () => {
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

  const [statusMessage, setStatusMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.erro || 'Erro ao cadastrar paciente');
      }

      const data = await response.json();
      setStatusMessage('Paciente cadastrado com sucesso!');
      console.log('Paciente cadastrado:', data);
    } catch (error) {
      setError((error as Error).message);
      console.error('Erro:', error);
    }
  };

  return (
    <div className="cadastro-body-container">
      <header className="cadastro-header-container">
        <h1>Cadastro de Paciente</h1>
      </header>
      <main className="cadastro-main-section">
        <form className="cadastro-form" onSubmit={handleSubmit}>
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
              required
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

          <input className="cadastro-submit" type="submit" value="Cadastrar Paciente" />
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
        {error && <p className="error-message">{error}</p>}
      </main>
    </div>
  );
};

export default Cadastro;
