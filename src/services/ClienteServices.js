const ClienteModel = require('../models/clienteModel')

class ClienteServices {
  static verifyFields(
    primeiroNome,
    sobrenome,
    cpf,
    email,
    telefone,
    quarto,
    formaPagamento,
    checkIn,
    checkOut
  ) {
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
      return false
    } else {
      return true
    }
  }

  static async verifyClienteExists(cpf) {
    const clienteExists = await ClienteModel.findOne({ where: { cpf: cpf } })

    return !!clienteExists
  }

  static async createNewCliente(newCliente) {
    const cliente = await ClienteModel.create(newCliente)

    return cliente.dataValues
  }

  static async findClienteById(id) {
    const cliente = await ClienteModel.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      raw: true
    })

    return cliente
  }
}

module.exports = ClienteServices
