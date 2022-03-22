const ClienteModel = require('../models/clienteModel.js')

const sequelize = require('../database/connection.js')

async function sync() {
  try {
    await sequelize.sync({ force: true })
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`)
  }
}

async function seed() {
  await ClienteModel.bulkCreate([
    {
      primeiroNome: 'Teste',
      sobrenome: 'Seed 1',
      cpf: '16340245861',
      email: 'testeseed1@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'crédito',
      checkIn: '2022-11-22',
      checkOut: '2022-11-23'
    },
    {
      primeiroNome: 'Teste',
      sobrenome: 'Seed 2',
      cpf: '16340245862',
      email: 'testeseed2@email.com',
      telefone: '16988391461',
      quarto: 101,
      formaPagamento: 'débito',
      checkIn: '2022-11-22',
      checkOut: '2022-11-22'
    },
    {
      primeiroNome: 'Teste',
      sobrenome: 'Seed 3',
      cpf: '16340245863',
      email: 'testeseed3@email.com',
      telefone: '16988391461',
      quarto: 102,
      formaPagamento: 'dinheiro',
      checkIn: '2022-11-22',
      checkOut: '2022-11-22'
    }
  ])
}

async function run() {
  await sync()
  await seed()
}

run()
