const express = require('express')
const router = express.Router()

//Controller
const ClienteController = require('../controllers/ClienteController.js')

//Rotas

//Rota deve criar um novo cliente
router.post('/create', ClienteController.create)

//Rota deve listar todos os clientes
router.get('/', ClienteController.showAll)

//Rota deve listar um cliente baseado em seu ID
router.get('/:id', ClienteController.showById)

//Rota deve deletar um cliente baseado em seu ID
router.delete('/:id', ClienteController.deleteById)

module.exports = router
