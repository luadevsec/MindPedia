# MindPedia

MindPedia é um projeto desenvolvido com React e TypeScript. O projeto utiliza o vite para configuração inicial e possui uma estrutura organizada para o desenvolvimento de componentes, páginas e utilitários.

## Dependências

Este projeto utiliza as seguintes dependências:

- **React**: Biblioteca para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **axios**: Cliente HTTP para fazer requisições.
- **eslint**: Ferramenta de linting para JavaScript e TypeScript.
- **prettier**: Formatador de código.
- **react-router-dom**: Biblioteca para roteamento em aplicativos React.
- **styled-components**: Biblioteca para estilização de componentes com CSS-in-JS.

## Configuração do Ambiente

1. **Instalar Dependências**

   Para instalar as dependências do projeto, execute:

   ```bash
   yarn install
   ```

2. **Iniciar o Servidor de Desenvolvimento**

   Para iniciar o servidor de desenvolvimento, execute:

   ```bash
   yarn start
   ```

3. **Compilar o Projeto**

   Para compilar o projeto para produção, execute:

   ```bash
   yarn build
   ```

## Estrutura de Diretórios

- **`public/`**: Contém arquivos estáticos, como o `index.html` e o favicon.
- **`src/`**: Contém o código-fonte do aplicativo.
  - **`assets/`**: Imagens e outros recursos estáticos.
  - **`components/`**: Componentes React reutilizáveis.
  - **`model/`**: Modelos e definições de tipos.
  - **`pages/`**: Páginas do aplicativo.
  - **`utils/`**: Funções utilitárias e helpers.

## Configuração do TypeScript

O TypeScript está configurado no `tsconfig.json` com as seguintes opções:

- **`baseUrl`**: Define o diretório base para caminhos relativos.
- **`paths`**: Define aliases para caminhos dentro do projeto.

```json
{
  "compilerOptions": {
  "baseUrl": "src",
  "paths": {
    "@components/*": ["components/*"],
    "@model/*": ["model/*"],
    "@pages/*": ["pages/*"],
    "@utils/*": ["utils/*"],
    "@assets/*": ["assets/*"]
  }
}
```

## Contribuindo

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões de melhorias, por favor, abra uma issue ou um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

[docs do frontend](./frontend/README.md)

[docs do banco de dados](./BackEnd/db/READEME.md)
