const express = require('express')
const router = express.Router()

//Controller
const ClienteController = require('../controllers/ClienteController.js')

//Rotas

router.post('/create', ClienteController.create)
router.get('/', ClienteController.showAll)

module.exports = router