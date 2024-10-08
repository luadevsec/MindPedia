const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const listarPacientesController = require('../controllers/listarPacientesController');
const pacienteAleatorioController = require('../controllers/pacienteAleatorioController');

router.post('/Cadastro', pacienteController.criarPaciente);

router.get('/ramCreate', pacienteAleatorioController.gerarPacienteAleatorio);

router.get('/listar', listarPacientesController.listarPacientes);

router.get('/id/:id', pacienteController.buscarPacientePorId);

module.exports = router;