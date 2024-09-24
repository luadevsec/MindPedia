# componentes

- Cadastro
  - isolar opções
  ```ts
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
  ```

  - campos deveriam ser um componente externo
  ```tsx
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
  ```
- Ficha
  - campo com certeza deveria ser um componente e reutilizavel a toda a aplicação
  ```ts
  function Campo ({ titulo, conteudo }: { titulo: string, conteudo: string | null }) {
    return (
        <h2 className='component-campo' title={titulo}>
            {conteudo || ''}
        </h2>
    );
  }
  ```