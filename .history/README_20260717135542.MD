# EduShare #

API e aplicação web para compartilhamento de trabalhos acadêmicos.

## Sobre o projeto

O EduShare é uma plataforma desenvolvida para permitir o compartilhamento,
organização e gerenciamento de trabalhos acadêmicos.

Usuários podem criar trabalhos, categorizar conteúdos, realizar upload de
arquivos relacionados aos projetos.

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

### Infraestrutura

- Docker
- Docker Compose

### Observabilidade

- OpenTelemetry
- Jaeger

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

## Como executar o projeto

### Pré-requisitos

- Node.js
- Docker
- Docker Compose


### Clonar o projeto

git clone URL_DO_REPOSITORIO

docker compose up -d

npm install

node server.js

## Documentação da API

A documentação está disponível através do Swagger:
http://localhost:3000/api-docs

## Observabilidade

A aplicação possui instrumentação utilizando OpenTelemetry.

Os traces das requisições são enviados para o Jaeger.

Fluxo:

Aplicação
↓
OpenTelemetry
↓
Jaeger

## Roadmap

- [x] API RESTful
- [x] CRUD de usuários
- [x] CRUD de trabalhos
- [x] Upload de arquivos
- [x] Autenticação JWT
- [x] Validação de dados
- [x] Docker
- [x] Swagger
- [x] OpenTelemetry + Jaeger

- [ ] Frontend Vue.js
- [ ] Deploy
- [ ] Testes automatizados
- [ ] AWS Lambda

## Autor

Desenvolvido por Eduan Souza.

Projeto criado com objetivo de estudo e demonstração de práticas modernas de desenvolvimento fullstack