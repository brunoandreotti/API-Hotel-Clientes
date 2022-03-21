const request = require('supertest')
const ClienteModel = require('../models/clienteModel.js')
const app = require('../../app.js')

describe('Criar Cliente', () => {
  it('Deve criar um cliente', async () => {
    const response = await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerCriaNovoCliente',
      cpf: '16340245862',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '20/03/2022',
      checkOut: '21/03/2022'
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.message).toBe('Cliente cadastrado com sucesso!')
  })

  it('Não deve criar um cliente com um campo faltando', async () => {
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
      checkIn: '20/03/2022',
      checkOut: '20/03/2022'
    })

    const response = await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerExistenteDois',
      cpf: '16340245863',
      email: 'testecontrollerexistente@email.com',
      telefone: '16988391461',
      formaPagamento: 'dinheiro',
      quarto: 200,
      checkIn: '20/03/2022',
      checkOut: '20/03/2022'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe(
      'Cliente com o CPF informado já cadastrado!'
    )
  })

  it('Não deve criar um cliente com alguma validação inválida', async () => {
    const response = await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerExistente',
      cpf: '11340245863',
      email: 'testecontrollerexistente@email.com',
      telefone: '16988391461',
      formaPagamento: 'cheque',
      quarto: 200,
      checkIn: '20/03/2022',
      checkOut: '20/03/2022'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe(
      'Validation error: Escolha a forma de pagamento entre: "dinheiro", "crédito" ou "débito"'
    )
  })
})

describe('Listar Cliente', () => {
  it('Deve listar todos os clientes criados', async () => {
    const response = await request(app).get('/clientes/')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('resultado')
  })

  it('Não deve listar um cliente que não existe', async () => {
    const response = await request(app).get('/clientes/999')

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe('Cliente não encontrado!')
  })

  it('Deve listar um cliente existente', async () => {
    const response = await request(app).get('/clientes/1')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('id')
  })
})

describe('Atualizar Cliente', () => {
  it('Deve atualizar um cliente', async () => {
    await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerAtualizaCliente',
      cpf: '16340675862',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    const response = await request(app).patch('/clientes/6').send({
      primeiroNome: 'TesteAtualizado',
      sobrenome: 'ControllerAtualizaCliente',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('Cliente atualizado com sucesso!')
  })

  it('Não deve atualizar um cliente ao enviar um CPF já cadastrado', async () => {
    const response = await request(app).patch('/clientes/6').send({
      primeiroNome: 'TesteAtualizado',
      sobrenome: 'ControllerAtualizaCliente',
      cpf: '16340675862',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe(
      'Cliente com o CPF informado já cadastrado!'
    )
  })

  it('Não deve atualizar um cliente que não existe', async () => {
    const response = await request(app).patch('/clientes/999').send({
      primeiroNome: 'TesteAtualizado',
      sobrenome: 'ControllerAtualizaCliente',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe('Cliente não encontrado!')
  })

  it('Não deve atualizar um cliente com alguma validação inválida', async () => {
    const response = await request(app).patch('/clientes/6').send({
      primeiroNome: 'TesteAtualizado',
      sobrenome: 'ControllerAtualizaCliente',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      cpf: '1634067586-8',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe(
      'Validation error: Escreva o CPF sem pontos ou traços,\n' +
        'Validation error: Escreva o CPF sem pontos ou traços'
    )
  })
})

describe('Deletar Cliente', () => {
  it('Deve deletar um cliente existe', async () => {
    await request(app).post('/clientes/create').send({
      primeiroNome: 'Teste',
      sobrenome: 'ControllerAtualizaCliente',
      cpf: '16340225862',
      email: 'testecontroller@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '22/11/2022',
      checkOut: '23/11/2023'
    })

    const response = await request(app).delete('/clientes/7')

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('Cliente deletado com sucesso!')
  })

  it('Não deve deletar um cliente que não existe', async () => {
    const response = await request(app).delete('/clientes/999')

    expect(response.statusCode).toBe(401)
    expect(response.body.message).toBe('Cliente não encontrado!')
  })
})
