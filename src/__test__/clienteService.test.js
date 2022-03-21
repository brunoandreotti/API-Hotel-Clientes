const ClienteServices = require('../services/ClienteServices.js')

describe('Create Cliente', () => {
  it('Deve retornar true se todos os campos estiverem preenchidos', () => {
    const data = {
      primeiroNome: 'Teste',
      sobrenome: 'Teste',
      cpf: '46340245862',
      email: 'teste@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '2022-11-22',
      checkOut: '2022-11-23'
    }

    const verifiedFields = ClienteServices.verifyFields(
      data.primeiroNome,
      data.sobrenome,
      data.cpf,
      data.email,
      data.telefone,
      data.quarto,
      data.formaPagamento,
      data.checkIn,
      data.checkOut
    )

    expect(verifiedFields).toBe(true)
  })

  it('Deve conseguir criar um novo Cliente', async () => {
    const cliente = {
      primeiroNome: 'Teste',
      sobrenome: 'ServiceCriaNovoCliente',
      cpf: '46340245862',
      email: 'teste@email.com',
      telefone: '16988391461',
      quarto: 100,
      formaPagamento: 'dinheiro',
      checkIn: '2022-11-22',
      checkOut: '2022-11-23'
    }

    const user = await ClienteServices.createNewCliente(cliente)

    expect(user).toHaveProperty('id')
  })

  it('Deve verificar se um Cliente já existe', async () => {
    const cliente = {
      primeiroNome: 'Teste',
      sobrenome: 'ServiceVerificaSeJáExiste',
      cpf: '46340245863',
      email: 'testeexiste@email.com',
      telefone: '16988391461',
      quarto: 110,
      formaPagamento: 'débito',
      checkIn: '12/11/2022',
      checkOut: '12/11/2022'
    }
    await ClienteServices.createNewCliente(cliente)
    const clienteExists = await ClienteServices.verifyClienteExists(cliente.cpf)

    expect(clienteExists).toBe(true)
  })

  it('Deve encontrar um Cliente pelo seu ID', async () => {
    const clienteData = {
      primeiroNome: 'Teste',
      sobrenome: 'ServiceEncontraPeloID',
      cpf: '46340245863',
      email: 'testeid@email.com',
      telefone: '16988391461',
      quarto: 110,
      formaPagamento: 'débito',
      checkIn: '12/11/2022',
      checkOut: '12/11/2022'
    }

    const novoCliente = await ClienteServices.createNewCliente(clienteData)

    const cliente = await ClienteServices.findClienteById(novoCliente.id)

    expect(cliente.email).toBe('testeid@email.com')
  })
})
