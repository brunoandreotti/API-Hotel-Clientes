const ClienteModel = require('../models/clienteModel')

class ClienteController {
  static async showAll(req, res) {
    try {
      const clientes = await ClienteModel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      return res.status(200).json({ resultado: clientes })
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }

  static async showById(req, res) {
    const id = req.params.id

    try {
      const cliente = await ClienteModel.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      if (!cliente) {
        return res.status(401).json({
          status: 401,
          message: 'Cliente não encontrado!'
        })
      }

      return res.status(200).json(cliente)
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }

  static async create(req, res) {
    const {
      primeiroNome,
      sobrenome,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    } = req.body

    if (
      !primeiroNome ||
      !sobrenome ||
      !cpf ||
      !email ||
      !telefone ||
      !quarto ||
      !formaPagamento ||
      !checkIn ||
      !checkOut
    ) {
      return res.status(401).json({
        status: 401,
        message: 'Todos os campos precisam ser preenchidos!'
      })
    }

    const clienteExists = await ClienteModel.findOne({ where: { cpf: cpf } })

    if (clienteExists) {
      return res.status(401).json({
        status: 401,
        message: 'Cliente com o CPF informado já cadastrado!'
      })
    }

    const newCliente = {
      primeiroNome,
      sobrenome,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    }

    try {
      await ClienteModel.create(newCliente)
      res
        .status(201)
        .json({ status: 201, message: 'Cliente cadastrado com sucesso!' })
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }

  static async updateById(req, res) {
    const { id } = req.params
    const {
      primeiroNome,
      sobrenome,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    } = req.body

    const cliente = await ClienteModel.findOne({ where: { id: id }, raw: true })

    if (!cliente) {
      return res.status(401).json({
        status: 401,
        message: 'Cliente não encontrado!'
      })
    }

    const novosDados = {
      primeiroNome,
      sobrenome,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    }

    try {
      await ClienteModel.update(novosDados, {where: cliente})
      return res
        .status(200)
        .json({ status: 200, message: 'Atualizado com sucesso!' })
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: `Algo deu errado: ${error}` })
    }




  }

  static async deleteById(req, res) {
    const { id } = req.params

    const cliente = await ClienteModel.findOne({ where: { id: id }, raw: true })

    if (!cliente) {
      return res.status(401).json({
        status: 401,
        message: 'Cliente não encontrado!'
      })
    }

    try {
      await ClienteModel.destroy({ where: cliente })
      return res
        .status(200)
        .json({ status: 200, message: 'Cliente deletado com sucesso!' })
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: `Algo deu errado: ${error}` })
    }
  }

}

module.exports = ClienteController
