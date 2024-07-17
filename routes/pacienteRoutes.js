const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get('/', pacienteController.listarPacientes);

router.post('/', pacienteController.criarPaciente);

router.post('/ramCreate', pacienteController.criarPacienteAleatorio);

router.get('/cardInfo', pacienteController.obterCardInfo);

router.get('/:id', pacienteController.obterPaciente);

module.exports = router;
