const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const dan = require('../db/iriri');

router.get('/', pacienteController.listarPacientes);

router.post('/', pacienteController.criarPaciente);

router.get('/cardInfo', pacienteController.obterCardInfo);

router.get('/:id', pacienteController.obterPaciente);

router.post('/ramCreate', pacienteController.ramCreate);

router.get('/teste', pacienteController.a);


module.exports = router;
