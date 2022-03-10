require('dotenv-safe/config.js')
const express = require('express')

//Conexão com o banco
const sequelize = require('./src/database/connection.js')

//Models
const Cliente = require('./src/models/clienteModel.js')

const app = express()

//Ler e enviar JSON na req e res
app.use(express.json())

const PORT = process.env.PORT



//Sincronização com o banco
async function sync() {
  try {
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`)
  }
}

sync()
