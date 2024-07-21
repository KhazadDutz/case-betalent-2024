## API Adonis.js com MySQL

Este projeto CRUD, é uma API Node.js construída com o framework Adonis.js, utilizando Lucid como ORM (Object-Relational Mapper), para persistência de dados em um banco de dados MySQL.

## Primeiros Passos

### Pré-requisitos

- Node.js e npm (ou yarn) instalados em seu sistema. Você pode baixá-los do site oficial: [https://nodejs.org/en](https://nodejs.org/en);
- MySQL como Database;

### Clonando o Repositório

1. Abra seu terminal ou prompt de comando.
2. Use `git clone` para clonar o repositório localmente:

```bash
git clone git@github.com:KhazadDutz/case-betalent-2024.git
```

### Instalação

1. Navegue até o diretório do projeto:

2. Instale as dependências do projeto:

```bash
npm install
```

## Configuração de Desenvolvimento

### Variáveis de Ambiente

O aplicativo pode exigir que variáveis de ambiente específicas sejam definidas. Essas variáveis podem ser definidas em um arquivo `.env` na raiz do projeto. Consulte a documentação do Adonis.js para obter mais detalhes sobre variáveis de ambiente: [https://v5-docs.adonisjs.com/guides/introduction](https://v5-docs.adonisjs.com/guides/introduction)

### Configuração do Banco de Dados

O Adonis.js usa variáveis de ambiente para configurar a conexão do banco de dados. Certifique-se de ter as seguintes variáveis definidas em seu arquivo `.env` (substitua pelas credenciais reais):

```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_USER=seu_usuario_banco_de_dados
DB_PASSWORD=sua_senha_banco_de_dados
DB_NAME=seu_nome_banco_de_dados
```

**Observação:** Substitua os valores do placeholder pelas credenciais reais do seu banco de dados MySQL.

### Executando Migrações

1. Crie tabelas do banco de dados executando as migrações:

```bash
node ace migration:run
```

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento Adonis.js:

```bash
node ace serve
```

Isso iniciará o servidor na porta padrão (geralmente `http://localhost:8080`, mas isso pode variar, checar o arquivo `.env`).

## Rotas da API

A API fornece várias rotas para gerenciar usuários, clientes, produtos e vendas. Todas as rotas requerem autenticação, exceto a rota de cadastro.

**Rotas Disponíveis:**

**Usuários:**

- `POST /signup`: Cria um novo usuário (sem autenticação necessária).
- `POST /login`: Autentica um usuário e retorna um token.

**Clientes (Requer Autenticação):**

- `GET /clients`: Busca uma lista de todos os clientes.
- `GET /clients/:id`: Recupera detalhes de um cliente específico por ID.
- `POST /clients`: Cria um novo cliente.
- `PUT /clients/:id`: Atualiza um cliente existente.
- `DELETE /clients/:id`: Exclui um cliente.

**Produtos (Requer Autenticação):**

- `GET /products`: Busca uma lista de todos os produtos.
- `GET /products/:id`: Recupera detalhes de um produto específico por ID.
- `POST /products`: Cria um novo produto.
- `PUT /products/:id`: Atualiza um produto existente.
- `DELETE /products/:id`: Exclui um produto.

**Vendas (Requer Autenticação):**

- `POST /sales`: Cria uma nova venda.

**Enviando Solicitações:**

Use ferramentas como Postman e curl, para enviar solicitações aos endpoints da API. Lembre-se de incluir todos os headers necessários (por exemplo, tokens de autorização) com base nos requisitos da rota.

## Exemplo com Postman

1. Abra o Postman ou seu cliente HTTP preferido.
2. Defina a URL base como `http://localhost:8080`
3. Configure o método de requisição para o endpoint desejado (por exemplo, POST para cadastro, GET para buscar clientes).
4. Para rotas que requerem autenticação, inclua no `HEADER` da requisição o parâmetro `Authorization` com o seu `token` gerado ao realizar o `login`.
5. No corpo da requisição (se aplicável), forneça os dados que deseja enviar (por exemplo, informações do usuário para cadastro, detalhes do produto para criação).
6. Envie a requisição e observe a resposta na janela do Postman.

Este arquivo README.md fornece um guia completo para configurar, executar e interagir com o projeto. Lembre-se de adaptar as variáveis de ambiente, implementação de autenticação e exemplos de requisições para os requisitos específicos do projeto

## Dificuldades
1. Aprender a utilizar o Adonis.js e o Lucid do zero. Tenho conhecimento com Node.js juntamente com Express e JWT como autenticador;
2. Utilizar o JWT como autenticador no projeto. Acabei utilizando o autenticador do próprio AdonisJs;
3. Entender o funcionamento de Middlewares no Adonis, como configurar e qual a sua melhor implementação;
4. Encontrar um melhor jeito de tratar os erros e excessões da aplicação.

## Projeto de CRUD que realizei para entrar na Trybe em 2022
Aqui estará o link de um projeto que realizei como teste técnico para uma vaga de Backend na Trybe em 2022. 
Nesse projeto utilizei Node.js, Sequelize e JWT.
https://github.com/KhazadDutz/case-backend-trybe-2022