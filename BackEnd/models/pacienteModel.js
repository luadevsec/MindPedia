const pacientes = require('../pacientes.json');
const { v4: uuidv4 } = require('uuid');

function salvarPacientes(dados) {
  require('fs').writeFileSync(
    './pacientes.json',
    JSON.stringify(dados, null, 2)
  );
}

const pacienteModel = {
  criarPaciente: (novoPaciente) => {
    novoPaciente.id = uuidv4();
    pacientes.push(novoPaciente);
    salvarPacientes(pacientes);
    return novoPaciente; 
  },
  listarPacientes: () => {
    return pacientes;
  },
  encontrarPacientePorId: (id) => {
    const paciente = pacientes.find(p => p.id === id);
    return paciente; 
  }
};

module.exports = pacienteModel;