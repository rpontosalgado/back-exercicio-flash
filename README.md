back-exercicio-flash
====================

Descrição do projeto
--------------------

Projeto backend com capacidade de criar registros de empresas e colaboradores, além de uma rota para consultar a lista de colaboradores de uma determinada empresa.

![Badge](https://img.shields.io/badge/build-stable-green)

Tabela de conteúdos
===================

<!--ts-->
  * [Descrição do projeto](#descrição-do-projeto)
  * [Tabela de conteúdos](#tabela-de-conteudos)
  * [Configuração do Banco de Dados Local](#configuração-do-banco-de-dados-local)
  * [Features](#features)
    * [Criação de empresa](#criação-de-empresa)
    * [Criação de funcionário](#criação-de-funcionário)
    * [Pegar funcionários pelo nome da empresa](#pegar-funcionários-pelo-nome-da-empresa)
    * [Pegar nomes das empresas](#pegar-nomes-das-empresas)
  * [Tecnologias e Libs utilizadas](#tecnologias-e-libs-utilizadas)
  * [Pontos de melhoria](#pontos-de-melhoria)
  * [Autor](#autor)
<!--te-->

Configuração do Banco de Dados Local
====================================

Os arquivos do banco de dados `MongoDB` estão na raiz da pasta do projeto.
Para rodar o banco de dados localmente, com o `MongoDB` instalado na máquina, rodar o seguinte comando no terminal:

`mongod --dbpath <caminho para pasta do projeto>/data/db`

Assim, o servidor do banco de dados rodará localmente na porta padrão do __Mongo__, _27017_: `localhost:27017`

Com o servidor do banco de dados rodando, entre o `npm start` na pasta raiz do projeto pelo terminal para rodar a API localmente.

Features
========

Criação de empresa
------------------

- método `POST`
- `/company`

- Request Body
  ```JSON
  {
    "name": "",
    "tradingName": "",
    "registry": "",
    "address": {
      "street": "",
      "number": 0,
      "complement": "",
      "district": "",
      "city": "",
      "state": "",
      "country": "",
      "postCode": ""
    },
    "benefits": ["", "", "", ...]
  }
  ```

- Todos os campos são orbigatórios, exceto:
  - `address.complement`
  - `address.district`
- Campo `benefits` deve ter pelo menos um item

Criação de funcionário
----------------------

- método `POST``
- `/employee`

- Request Body
  ```JSON
  {
    "company": "",
    "name": "",
    "surname": "",
    "identification": "",
    "email": ""
  }
  ```

- Todos os campos são obrigatórios
- Campo `company` é a _razão social_ da __empresa__ em que o funcionário trabalha

Pegar funcionários pelo nome da empresa
---------------------------------------

- método `GET`
- `/employee/:company`

- Response
  - retorna os funcionários da empresa que trabalham na empresa cujo nome foi passado pelo path

Pegar nomes das empresas
------------------------

- método `GET`
- `/company`

- Response
  - retorna array com a razão socias das empresas cadastradas

Tecnologias e Libs utilizadas
==============================

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Express](https://expressjs.com)

- [MongoDB](https://www.mongodb.com/)

- [Mongoose](https://mongoosejs.com/)

- [cors](https://www.npmjs.com/package/cors)

Pontos de melhoria
==================

- Armezenar funcionários com o `_id` da empresa no __db__, para facilitar as consultas relacionais entre coleções.

- Tratamento de erros para criação de empresas e funcionários mais específicos
  - para evitar que dados incorretos sejam passados;
  - informar a quem está consumindo a _API_ qual erro está sendo cometido; e
  - não ser explícito demais na descrição do erro para evitar exibir possíveis vulnerabilidades.

Autor
=====

**Roberto de Abreu Salgado**

Entre em contato:

[![Linkedin Badge](https://img.shields.io/badge/-Roberto-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/rsalgado3/) 
[![Gmail Badge](https://img.shields.io/badge/-r.salgado3@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:r.salgado3@gmail.com)](mailto:r.salgado3@gmail.com)