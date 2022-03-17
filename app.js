require('dotenv-safe').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const express = require('express')
const app = express()
const PORT = process.env.PORT

//Seeder
const seeder = require('./src/seeders/clienteSeeder.js')

//Conexão com o banco
const sequelize = require('./src/database/connection.js')

//Models
const Cliente = require('./src/models/clienteModel.js')

//Routers
const clienteRoutes = require('./src/routes/clienteRoutes.js')

//Ler e enviar JSON na req e res
app.use(express.json())

//Rotas
app.use('/clientes', clienteRoutes)


//Sincronização com o banco
async function sync() {
  try {
    await sequelize.sync()
    //await seeder()
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`)
  }
}

sync()

module.exports = app