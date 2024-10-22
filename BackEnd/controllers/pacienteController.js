const pacienteModel = require('../db/user');

const pacienteController = {
  criarPaciente: async (req, res) => {
    const novoPaciente = req.body;
    
    // Validações (implementar as necessárias - nome, CPF, etc.):
    if (!novoPaciente.nome || novoPaciente.nome.trim() === '') {
      return res.status(400).json({ error: 'Nome do paciente é obrigatório' });
    }
    // ... outras validações

    const pacienteCriado = await pacienteModel.criarPaciente(novoPaciente);
    res.status(201).json(pacienteCriado);
  },
  buscarPacientePorId: async (req, res) => {
    const pacienteId = req.params.id;
    const paciente = await pacienteModel.getUserID(pacienteId);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    
    const infoCard = {
      id: paciente.id,
      nome: paciente.nome,
      // ... outros campos para enviar para o card
    };

    res.status(200).send(paciente); 
  }
};

module.exports = pacienteController;