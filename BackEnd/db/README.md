# MindPedia BackEnd - Estrutura de Dados

## Estrutura de Diretórios

A estrutura de diretórios para a parte de dados do projeto é a seguinte:

```
db/
│   README.md
│   test.js <-- esse é o arquivo index para a api de teste
│
├───api
│       routes.js <-- aqui a central de rotas
│
├───database
│       database.sqlite
│
├───lib <-- funções especificas de acesso e registro de dados
│       dataSource.ts
│       userLib.ts
│
├───model <-- definição dos tipos de dados e entidades
│       user.ts
│
└───services <-- facades de acesso contextualizado e simplificado
        userFacade.ts
```

## Organização das Pastas

- **`api/`**: Contém os arquivos relacionados às rotas da API. Aqui é onde você define as rotas e endpoints que serão expostos pela API.

- **`database/`**: Contém o arquivo do banco de dados SQLite. Este é o banco de dados persistente usado pela aplicação.

- **`lib/`**: Contém arquivos responsáveis pela interação direta com o banco de dados usando TypeORM. Aqui você define a configuração da conexão com o banco de dados e funções utilitárias relacionadas ao acesso aos dados.

- **`model/`**: Contém as definições das entidades do banco de dados. Cada arquivo aqui representa uma entidade e sua estrutura no banco de dados.

- **`services/`**: Contém funções de fachada (facades) que simplificam a interação com os dados. Estas funções são usadas para acessar e manipular os dados de uma maneira mais abstrata e conveniente.

## Exemplo de Código

### 1. **Modelo (`model/user.ts`)**

Define a estrutura da entidade `User`.

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
```

### 2. **Funções de Acesso (`lib/userLib.ts`)**

Define funções para interagir diretamente com o banco de dados.

```typescript
import { AppDataSource } from './dataSource';
import { User } from '../model/user';

export async function addUser(firstName: string, lastName: string, age: number) {
  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create({ firstName, lastName, age });
  return await userRepository.save(newUser);
}

export async function fetchUsers() {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.find();
}
```

### 3. **Serviços (`services/userFacade.ts`)**

Abstrai a lógica de acesso aos dados e fornece funções de uso geral.

```typescript
import { addUser, fetchUsers } from '../lib/userLib';

export async function createUser(firstName: string, lastName: string, age: number) {
  return await addUser(firstName, lastName, age);
}

export async function getAllUsers() {
  return await fetchUsers();
}
```

### 4. **Rotas (`api/routes.js`)**

Define as rotas da API e usa as funções dos serviços.

```javascript
const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../services/userFacade');

// Endpoint para adicionar um novo usuário
router.post('/users', async (req, res) => {
  const { firstName, lastName, age } = req.body;
  try {
    const newUser = await createUser(firstName, lastName, age);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obter todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

## Tutorial para Adicionar Novo Recurso

1. **Crie o Modelo**

   Adicione a nova entidade na pasta `model`. Defina as propriedades e os tipos de dados conforme necessário.

2. **Adicione Funções na Lib**

   No arquivo apropriado dentro da pasta `lib`, crie funções para interagir com a nova entidade. Certifique-se de adicionar as funções necessárias para criar, ler, atualizar e deletar os dados.

3. **Atualize o Serviço**

   Se necessário, adicione funções na pasta `services` para abstrair a lógica de acesso aos dados e fornecer uma interface de uso mais conveniente para as outras partes da aplicação.

4. **Adicione Rotas**

   No arquivo `api/routes.js`, adicione novas rotas para expor a funcionalidade através da API. Certifique-se de mapear as funções de serviço para os endpoints apropriados.

5. **Compile e Teste**

   Compile o TypeScript e teste a nova funcionalidade:

   ```bash
   npm run build
   npm run test-db
   ```

Isso deve configurar seu README para a parte de dados do seu projeto, com exemplos claros e um guia passo a passo para adicionar novos recursos. Se precisar de mais ajuda, é só avisar!