const request = require('supertest')
const ClienteModel = require('../models/clienteModel.js')
const app = require('../../app.js')

describe('Criar Cliente', () => {
  it('Deve criar um Cliente', async () => {
    const response = await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerCriaNovoCliente',
      cpf: '16340245862',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.message).toBe('Cliente cadastrado com sucesso!')
  })

  it('Não deve criar um Cliente com um campo faltando', async () => {
    const response = await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerNaoCriar',
      cpf: '16340245862',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe(
      'Todos os campos precisam ser preenchidos'
    )
  })

  it('Não deve criar um cliente já existente', async () => {
    await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerExistente',
      cpf: '16340245863',
      email: 'testecontrollerexistente@email.com',
      telefone: '16988391461',
      formaPagamento: 'dinheiro',
      quarto: 200,
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    const response = await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerExistenteDois',
      cpf: '16340245863',
      email: 'testecontrollerexistente@email.com',
      telefone: '16988391461',
      formaPagamento: 'dinheiro',
      quarto: 200,
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe(
      'Cliente com o CPF informado já cadastrado!'
    )
  })
})

describe('Listar Cliente', () => {
  it('Deve listar todos os clientes criados', async () => {
    const response = await request(app).get('/clientes/')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('resultado')
  })

  it('Não deve listar um Cliente que não existe', async () => {
    const response = await request(app).get('/clientes/999')

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe('Cliente não encontrado!')
  })

  it('Deve listar um Cliente existente', async () => {
    const response = await request(app).get('/clientes/1')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('id')
  })
})
