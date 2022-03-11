const Cliente = require('../models/clienteModel')

class ClienteController {
  static async showAll(req, res) {
    try {
      const clientes = await Cliente.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      res.status(200).json(clientes)
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }

  static async showById(req, res) {
    const { id } = req.params

    try {
      const cliente = await Cliente.findByPk(id, {attributes: {exclude: ['createdAt', 'updatedAt']}})

      if (!cliente) {
        return res.status(401).json({
          status: 401,
          message: 'Cliente não encontrado!'
        })
      }

      res.status(200).json(cliente)
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }

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
      return res.status(401).json({
        status: 401,
        message: 'Todos os campos precisam ser preenchidos!'
      })
    }

    const clienteExists = await Cliente.findOne({ where: { cpf } })

    if (clienteExists) {
      return res.status(401).json({
        status: 401,
        message: 'Cliente com o CPF informado já cadastrado!'
      })
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
      res
        .status(201)
        .json({ status: 201, message: 'Cliente cadastrado com sucesso!' })
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }
}

module.exports = ClienteController
