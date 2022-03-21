const ClienteModel = require('../models/clienteModel')
const ClienteServices = require('../services/ClienteServices')
const moment = require('moment')

class ClienteController {
  static async showAll(req, res) {
    try {
      const clientes = await ClienteModel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        raw: true
      })

      return res.status(200).json({ resultado: clientes })
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message })
    }
  }

  static async showById(req, res) {
    const id = req.params.id

    try {
      const cliente = await ClienteServices.findClienteById(id)

      if (!cliente) {
        return res.status(401).json({
          status: 401,
          message: 'Cliente não encontrado!'
        })
      }

      return res.status(200).json(cliente)
    } catch (error) {
      return res.status(500).json({ status: 401, message: error.message })
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

    const verifiedFields = ClienteServices.verifyFields(
      primeiroNome,
      sobrenome,
      cpf,
      email,
      telefone,
      quarto,
      formaPagamento,
      checkIn,
      checkOut
    )

    if (verifiedFields == false) {
      return res.status(401).json({
        status: 401,
        message: 'Todos os campos precisam ser preenchidos'
      })
    }

    const clienteExists = await ClienteServices.verifyClienteExists(cpf)

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
      checkIn: moment(checkIn, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      checkOut: moment(checkOut, 'DD/MM/YYYY').format('YYYY-MM-DD')
    }

    try {
      await ClienteServices.createNewCliente(newCliente)
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

    const cliente = await ClienteServices.findClienteById(id)

    if (!cliente) {
      return res.status(401).json({
        status: 401,
        message: 'Cliente não encontrado!'
      })
    }

    if (cpf) {
      const clienteExists = await ClienteServices.verifyClienteExists(cpf)

      if (clienteExists) {
        return res.status(401).json({
          status: 401,
          message: 'Cliente com o CPF informado já cadastrado!'
        })
      }
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

    if (checkIn) {
      novosDados.checkIn = moment(checkIn, 'DD/MM/YYYY').format('YYYY-MM-DD')
    }

    if (checkOut) {
      novosDados.checkOut = moment(checkOut, 'DD/MM/YYYY').format('YYYY-MM-DD')
    }

    try {
      await ClienteModel.update(novosDados, { where: cliente })
      return res
        .status(200)
        .json({ status: 200, message: 'Cliente atualizado com sucesso!' })
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: `${error.message}` })
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params

    const cliente = await ClienteServices.findClienteById(id)

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
