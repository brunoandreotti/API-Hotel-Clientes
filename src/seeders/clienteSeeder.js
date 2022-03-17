const ClienteModel = require('../models/clienteModel.js')

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
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    },
    {
      primeiroNome: 'Teste',
      sobrenome: 'Seed 2',
      cpf: '16340245862',
      email: 'testeseed2@email.com',
      telefone: '16988391461',
      quarto: 101,
      formaPagamento: 'débito',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    },
    {
      primeiroNome: 'Teste',
      sobrenome: 'Seed 3',
      cpf: '16340245863',
      email: 'testeseed3@email.com',
      telefone: '16988391461',
      quarto: 102,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    }
  ])
}

module.exports = seed