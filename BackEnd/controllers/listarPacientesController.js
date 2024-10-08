const pacienteModel = require('../db/user');

const listarPacientesController = {
  listarPacientes: async (req, res) => { 
    const listaDePacientes = await pacienteModel.listarPacientes();
    res.status(200).json(listaDePacientes); 
  }
};

module.exports = listarPacientesController;