const { DataTypes } = require('sequelize')

const sequelize = require('../database/connection.js')

const Cliente = sequelize.define('Cliente', {
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quarto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  formaPagamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  checkIn: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  checkOut: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
})

module.exports = Cliente
