const Cliente = require('../models/clienteModel')

class ClienteController {
  static async create(req, res) {
    const {
      nomeCompleto,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    } = req.body

    if (
      !nomeCompleto |
      !cpf |
      !email |
      !telefone |
      !quarto |
      !formaPagamento |
      !checkIn |
      !checkOut
    ) {
      return res.status(401).json({status: 401, message: 'Todos os campos precisam ser preenchidos!'})
    }

    const clienteExists = await Cliente.findOne({ where: { cpf }})

    if(clienteExists) {
      return res.status(401).json({status: 401, message: 'Cliente com o CPF informado já cadastrado!'})
    }

    const newCliente = {
      nomeCompleto,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    }

    try {
      await Cliente.create(newCliente)
      res.status(201).json({status: 201, message: 'Cliente cadastrado com sucesso!'})
    } catch (error) {
      return res.status(401).json({status: 401, message: error.message})
    }
  }
}

module.exports = ClienteController
