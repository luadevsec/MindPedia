

# **Documentação do Desenvolvedor - Frontend MindPedia**  

## 1. Visão Geral  

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)  

O **Frontend do MindPedia** é responsável pela interface do sistema, conectando diretamente com o backend para consumo e envio de dados.  
Ele é desenvolvido com **React** e **TypeScript**, utilizando **Styled Components** para estilização e gerenciamento de rotas com **React Router**.  

---

<details>
<summary><strong>2. Configuração do Ambiente ⚙️</strong></summary>

### 2.1. Instalação de Dependências  
```bash
yarn install
```

### 2.2. Rodando o Projeto  
```bash
yarn dev
```

### 2.3. Comandos Úteis  
- **Build do Projeto**:  
  ```bash
  yarn build
  ```
- **Rodar Testes**:  
  ```bash
  yarn test
  ```

</details>

---

<details>
<summary><strong>3. API e Endpoints 🌐</strong></summary>

### 3.1. Endpoints Utilizados no Frontend  
| Método | Endpoint         | Descrição                       |
|--------|------------------|---------------------------------|
| GET    | /                 | Página inicial                  |
| GET    | /menu             | Página de menu principal        |
| GET    | /cadastro         | Formulário de cadastro          |
| GET    | /ficha            | Exibe detalhes de um paciente   |
| GET    | /atendimento      | Interface de atendimento        |
| GET    | /quack            | Easter egg secreto 🦆           |
| *      | *                 | Página 404 para rotas inválidas |

### 3.2. Adicionando Novas Rotas  
- Importar o componente desejado e configurar a rota no arquivo principal de rotas:  
  ```jsx
  import { Route, Routes } from 'react-router-dom';
  import NewComponent from './pages/news/newComponent';

  function AppRoutes() {
    return (
      <Routes>
        <Route path="/new" element={<NewComponent />} />
      </Routes>
    );
  }

  export default AppRoutes;
  ```

</details>

---

<details>
<summary><strong>4. Componentes e Incrementos 🧩</strong></summary>

### 4.1. Estrutura dos Componentes  
- Todos os componentes ficam na pasta `src/components`.  
- Cada componente tem seu próprio arquivo `.tsx` e `.styles.ts` para a estilização.

### 4.2. Adicionando um Novo Componente  
1. Crie o componente em `src/components`.  
2. Estilize usando **Styled Components**.  
3. Importe e utilize no local desejado.  

### Exemplo de Componente:
```tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

export default Button;
```

</details>

---

<details>
<summary><strong>5. Utils Internos 🔧</strong></summary>

### 5.1. O que são os Utils?  
Os **utils** são funções auxiliares reutilizáveis no projeto, como manipulação de datas ou formatação de strings.

### 5.2. Adicionando um Novo Util  
- Crie uma nova função em `src/utils`.  
- Exemplo de uma função utilitária para formatar datas:  
  ```tsx
  export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR').format(date);
  }
  ```

</details>

---

<details>
<summary><strong>6. Referências 📚</strong></summary>

- [Documentação Oficial do MindPedia](../README.md)  
- [React](https://reactjs.org/)  
- [Styled Components](https://styled-components.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Yarn](https://yarnpkg.com/)  
- [React Router](https://reactrouter.com/)  

</details>
