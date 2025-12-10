# Node - Primeiro Projeto

Este é um projeto de estudo desenvolvido em Node.js utilizando Express e TypeScript. O objetivo é demonstrar a criação de uma API REST simples com rotas, middleware e manipulação de requisições.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Helmet](https://helmetjs.github.io/) (para segurança básica)

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/server.ts`: Ponto de entrada da aplicação, configuração do servidor e middlewares globais.
- `src/routes/`: Definição das rotas da API.
  - `produtos.ts`: Rotas relacionadas a produtos (GET, POST).
  - `voos.ts`: Exemplo de rota parametrizada para busca de voos.
- `src/middlewares/`: Middlewares customizados (ex: `intervir.ts`).
- `public/`: Arquivos estáticos.

## 🛠️ Como rodar o projeto

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm start
    ```
    
    Ou para rodar o script de arquivo específico:
    ```bash
    npm run file
    ```

4.  O servidor estará rodando em `http://localhost:3000`.

## 📍 Rotas Disponíveis

- **GET /**: Retorna informações básicas (teste).
- **GET /ping**: Teste de conectividade (retorna "pong").
- **GET /produtos**: Lista produtos.
- **GET /produtos/:id**: Busca produto por ID.
- **POST /produtos**: Criação de produto (log no console).
- **GET /voos/:from/:to**: Simulação de busca de voos entre dois locais.

## 📝 Licença

Este projeto está sob a licença ISC.
