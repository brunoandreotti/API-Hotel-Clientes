<br />
<p align="center">
    <img src="./readme/download.jpg" alt="Logo" width="150">

  <h3 align="center">API Hotel com Node, Express, Sequelize e SQLite</h3>
 <br />
  <p align="center">
     Sumário
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
    <h1 align="center">
    <img src="./readme/api.gif" alt="gif-readme">
 </h1>
  </p>
</p>


# Sobre
O objetivo do projeto foi criar uma API para um hotel utilizando Node, Express, Sequelize e SQLite como projeto final do Módulo 4 da Turma 10 do curso de Desenvolvimento Web Fullstack Resilia.

Cada integrante do grupo ficou responsável pela criação de uma API referente à um dos serviços do hotel. 

Sendo eles: clientes, funcionários, cardápio, filiais e quartos.

Nesta aplicação é possível cadastrar, listar, atualizar e deletar clientes.

# Conhecimentos Praticados
✔ NodeJs <br>
✔ Express <br>
✔ SQLite3 <br>
✔ Sequelize <br>
✔ CRUD com Sequelize <br>
✔ Padrão MVC <br>
✔ Testes Unitários e Teste de Integração


# Rotas da aplicação:

## Clientes

<b>[GET] </b> /clientes - A rota deve exibir todos os clientes cadastrados.<br>

<b>[GET] </b> /clientes/:id - A rota deve listar um cliente baseado em seu ID.<br>

<b>[POST] </b> /clientes/create - A rota deve cadastrar um cliente com as informações passadas no body da requisição.<br>

```javascript
{
"primeiroNome": "Teste",
"sobrenome": "Teste",
"cpf": "16340645861",
"email": "teste@email.com",
"telefone": "16912345678",
"quarto": 100,
"formaPagamento": "crédito",
"checkIn": "22/11/2022",
"checkOut": "23/11/2022"
}
```

<b>[PATCH] </b> /clientes/:id - A rota deve atualizar um cliente com as informações passadas no body da requisição. Caso necessário apenas uma informação pode ser atualizada por vez.<br>

```javascript
{
"primeiroNome": "Teste",
"sobrenome": "Atualizado",
"cpf": "64340335898",
"email": "testeatualizado@email.com",
"telefone": "16912345678",
"quarto": 150,
"formaPagamento": "dinheiro",
"checkIn": "22/11/2022",
"checkOut": "23/11/2022"
}
```

<b>[DELETE] </b> /clientes/:id - A rota deve deletar um cliente baseado em seu ID.<br>

# Validação de dados
 Foi adicionada as seguintes validações para os dados recebidos nas requisições: <br><br>
 <b>[POST] </b> /clientes/create <br>
   - Todos os campos precisam ser enviados no corpo da requisição.
   - Os campos "primeiroNome" e "sobrenome" deverão ser uma string.
   - O campo "cpf" deverá ser uma string com os 11 números referentes ao CPF.<br>
   - O campo "email" deverá ser uma string com um email.<br>
   - O campo "telefone" deverá ser uma string contendo os números do telefone/celular.<br>
   - O campo "quarto" deverá ser um número inteiro de no máximo 3 dígitos.<br>
   - O campo "formaPagamento" deverá ser uma string contendo algum dos valores: 'dinheiro', 'crédito' ou 'débito'<br>
   - Os campos "checkIn" e "checkOut" deverão ser uma string contendo uma data: 'DD/MM/AAAA'.

 <b>[PATCH] </b> /clientes/:id
   - Todos os campos podem ser atualizados ao mesmo tempo, bem como um campo de cada vez.
   - Os campos "primeiroNome" e "sobrenome" deverão ser uma string.
   - O campo "cpf" deverá ser uma string com os 11 números referentes ao CPF.<br>
   - O campo "email" deverá ser uma string com um email.<br>
   - O campo "telefone" deverá ser uma string contendo os números do telefone/celular.<br>
   - O campo "quarto" deverá ser um número inteiro de no máximo 3 dígitos.<br>
   - O campo "formaPagamento" deverá ser uma string contendo algum dos valores: 'dinheiro', 'crédito' ou 'débito'<br>
   - Os campos "checkIn" e "checkOut" deverão ser uma string contendo uma data: 'DD/MM/AAAA'.
 
 
 

# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:


```bash
# Clone este repositório
$ git clone https://github.com/brunoandreotti/API-Hotel-Clientes

# Acesse a pasta do projeto no terminal
$ cd API-Hotel-Clientes

# Instale as dependências do projeto
$ npm install

# Inicie o servidor da aplicação
$ npm start

# Utilize o Insomnia para realizar as requisições nas rotas na URL:
http://localhost:3000/

#Obs: Caso queira popular o banco de dados, acesse o arquivo 'app.js' no VSCode, remova o '//' da linha 29 e execute o comando:
$ npm start

# Para rodar os testes automatizados use os seguintes comandos:
$ npm install -g win-node-env (caso esteja utilizando Windows)
$ npm run test

```

### Dependências:
```javascript
"dependencies": {
    "dotenv-safe": "^8.2.0",
    "express": "^4.17.3",
    "moment": "^2.29.1",
    "sequelize": "^6.17.0",
    "sqlite3": "^5.0.2"
  },
  "devDependencies": {
    "jest": "^27.5.1",
    "nodemon": "^2.0.15",
    "supertest": "^6.2.2"
  }
```






# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://www.sqlite.org/index.html"><img src="./readme/sqlite-icon.svg" height="40" width="40" /></a> <a href="https://jestjs.io/pt-BR/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" width="40" /></a>
</p>



---
**Desenvolvido por <a href="https://www.linkedin.com/in/bruno-andreotti/"> Bruno Andreotti</a>, <a href="https://www.linkedin.com/in/denise-g-oliveira/"> Denise Oliveira </a>, <a href="https://www.linkedin.com/in/heitorschumann/"> Heitor Schumann </a>, <a href="https://www.linkedin.com/in/henrique-ferraz-a46123219/"> Henrique Ferraz </a>, <a href="https://www.linkedin.com/in/murilo-antunes-bb1143228/"> Murilo Antunes </a>.**

