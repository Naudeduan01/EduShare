# EduShare #

API e aplicação web para compartilhamento de trabalhos acadêmicos.

## Sobre o projeto

O EduShare é uma plataforma desenvolvida para permitir o compartilhamento,
organização e gerenciamento de trabalhos acadêmicos.

Usuários podem criar, gerenciar e colaborar com trabalhos, organizar conteúdos por categorias e realizar upload de arquivos relacionados aos projetos.

O projeto foi desenvolvido com foco em boas práticas de desenvolvimento,
arquitetura escalável, segurança, documentação e observabilidade.

## Funcionalidades

### Usuários
- Cadastro de usuários
- Atualização de dados
- Autenticação utilizando JWT
- Controle de acesso baseado em usuário

### Trabalhos
- Criar trabalhos
- Listar trabalhos
- Atualizar trabalhos
- Excluir trabalhos

### Arquivos
- Upload de arquivos
- Associação de arquivos aos trabalhos
- Exclusão de arquivos

### API
- API RESTful
- Documentação interativa com Swagger
- Validação de dados
- Tratamento global de erros

## Tecnologias utilizadas

### Backend

- Node.js
- Express
- PostgreSQL
- JWT
- bcrypt
- Zod
- Multer
- Swagger/OpenAPI
- Jest
- Supertest
- Testes automatizados dos endpoints da API

### Infraestrutura

- Docker
- Docker Compose
- AWS Lambda
- Amazon API Gateway
- Neon PostgreSQL

### Observabilidade

- OpenTelemetry
- Jaeger
- Grafana

### Frontend

- Vue.js
- Tailwind CSS

## Arquitetura

O backend foi desenvolvido utilizando uma arquitetura em camadas:
src
│
├── controllers
│   Responsáveis pelas requisições HTTP
│
├── services
│   Regras de negócio da aplicação
│
├── repositories
│   Comunicação com o banco de dados
│
├── routes
│   Definição dos endpoints
│
├── middlewares
│   Autenticação e tratamento de erros
│
├── schemas
│   Validação utilizando Zod
│
└── config
    Configurações da aplicação

    ## Banco de dados

O projeto utiliza PostgreSQL.

Principais entidades:

- Usuários
- Trabalhos
- Categorias
- Arquivos

Os relacionamentos são definidos utilizando chaves estrangeiras.


### Pré-requisitos

- Node.js
- Docker
- Docker Compose

## Como executar

Navegador:
edu-share-7jb9.vercel.app

Swagger:
https://5p48xt1yd0.execute-api.us-east-1.amazonaws.com/api-docs

## Como executar localmente

Abrir terminal na pasta raiz

### Backend

cd backend

npm install

docker compose up -d

node server.js

cd frontend

npm install

npm run dev

A aplicação estará disponível em:
http://localhost:5173

### Clonar o projeto

git clone URL_DO_REPOSITORIO

docker compose up -d

npm install

node server.js

## Documentação da API

A documentação está disponível através do Swagger:
http://localhost:3000/api-docs

## Testes

O projeto utiliza Jest e Supertest para testes automatizados da API.

Executar:

npm test




## Autor

Desenvolvido por Eduan Souza.

Projeto criado com objetivo de estudo e demonstração de práticas modernas de desenvolvimento fullstack