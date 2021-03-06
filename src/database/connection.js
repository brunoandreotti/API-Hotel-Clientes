const { Sequelize } = require('sequelize')
require('dotenv-safe').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.example' || '.env'
})

const sequelize = new Sequelize(process.env.DB_URL)

async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Banco de dados conectado com sucesso!')
  } catch (error) {
    console.log(`Erro ao conectar com o banco: ${error}`)
  }
}

connect()


module.exports = sequelize
