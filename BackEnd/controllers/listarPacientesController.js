const pacienteModel = require('../db/user');

const listarPacientesController = {
  listarPacientes: (req, res) => { 
    const listaDePacientes = pacienteModel.listarPacientes();
    res.status(200).json(listaDePacientes); 
  }
};

module.exports = listarPacientesController;