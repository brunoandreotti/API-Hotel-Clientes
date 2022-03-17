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
    <img src="./readme/pensamentos.gif" alt="gif-readme">
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
✔ Padrão MVC


# Rotas da aplicação:

## Clientes

<b>[GET] </b> /clientes - A rota deve exibir todos os clientes cadastrados.<br>

<b>[GET] </b> /clientes/:id - A rota deve listar um cliente baseado em seu ID.<br>

<b>[POST] </b> /clientes/create - A rota deve cadastrar um cliente com as informações passadas no body da requisição.<br>

```javascript
{
primeiroNome: 'Teste',
sobrenome: 'Teste',
cpf: '16340645861',
email: 'teste@email.com',
telefone: '16912345678',
quarto: 100,
formaPagamento: 'crédito',
checkIn: '22/11/2022',
checkOut: '23/11/2022'
}
```

<b>[PATCH] </b> /clientes/:id - A rota deve atualizar um cliente com as informações passadas no body da requisição. Caso necessário apenas uma informação pode ser atualizada por vez.<br>

```javascript
{
primeiroNome: 'Teste',
sobrenome: 'Atualizado',
cpf: '64340335898',
email: 'testeatualizado@email.com',
telefone: '16987654321',
quarto: 150,
formaPagamento: 'dinheiro',
checkIn: '25/11/2022',
checkOut: '26/11/2022'
}
```

<b>[DELETE] </b> /clientes/:id - A rota deve deletar um cliente baseado em seu ID.<br>

# Validação de dados
 Foi adicionada as seguintes validações para os dados recebidos nas requisições: <br><br>
 <b>[POST] </b> /clientes/create <br>
   - O campo "primeiroNome" e "sobrenome", deverá ser uma string.
   - O campo "cpf", deverá ser uma string com um endereço de email.<br>
   - O campo "email", deverá ser uma string com um endereço de email.<br>
   - O campo "email", deverá ser uma string com um endereço de email.<br>

 <b>[PATCH] </b> /obras : <br>
 
 
 <b>[PUT] </b> /obras/:id : <br>

# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:


```bash
# Clone este repositório
$ git clone https://github.com/brunoandreotti/pasta-projeto

# Acesse a pasta do projeto no terminal
$ cd pasta-projeto 

# Instale as dependências do projeto
$ npm install

# Inicie o servidor da aplicação
$ npm start

# Utilize o Insomnia para realizar as requisições nas rotas

#Obs: Caso queira popular o banco de dados, acesse o arquivo 'app.js' no VSCode, remova o '//' da linha 29 e execute o comando npm start

```






# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="./readme/sqlite-icon.svg" height="40" width="40" /></a>
</p>



---
**Desenvolvido por <a href="https://www.linkedin.com/in/bruno-andreotti/">Bruno Andreotti</a> .** 