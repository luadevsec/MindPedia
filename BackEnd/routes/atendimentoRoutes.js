const express = require('express');
const atendimentoController = require('../controllers/atendimentoController');

const atendimento = express.Router();

atendimento.post('/inicio', atendimentoController.comecarConsulta);

atendimento.get('/busca/:id', atendimentoController.getConsultaID);

atendimento.patch('/final', atendimentoController.finalizarConsulta);

module.exports = atendimento;