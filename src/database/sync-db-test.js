const sequelize = require('./connection.js')

//Models
const Cliente = require('../models/clienteModel.js')

async function sync() {
  try {
    await sequelize.sync({force: true})
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`)
  }
}

sync()
