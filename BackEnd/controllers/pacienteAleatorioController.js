const pacienteModel = require('../models/pacienteModel');
const { gerarPacienteAleatorio } = require('../utils/util'); 

const pacienteAleatorioController = {
  gerarPacienteAleatorio: (req, res) => {
    const novoPaciente = gerarPacienteAleatorio();
    const pacienteCriado = pacienteModel.criarPaciente(novoPaciente);
    res.status(201).json(pacienteCriado);
  }
};

module.exports = pacienteAleatorioController;