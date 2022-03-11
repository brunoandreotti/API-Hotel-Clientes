const { DataTypes } = require('sequelize')

const sequelize = require('../database/connection.js')

const Cliente = sequelize.define('Cliente', {
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: 'Escreva somente os números do CPF'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'E-mail inválido'
      }
    }
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: 'Escreva somente os números do telefone'
      }
    }
  },
  quarto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  formaPagamento: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['dinheiro', 'crédito', 'débito']],
        msg: 'Escolha a forma de pagamento entre: "dinheiro", "crédito" ou "débito"'
      }
    }
  },
  checkIn: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  checkOut: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  }
})

module.exports = Cliente
