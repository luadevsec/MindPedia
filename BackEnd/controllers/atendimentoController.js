const atendimentoDB = require('../db/consulta');

const atendimentoController = {
    comecarConsulta : async (req, res) => {
        var novaConsulta = req.body;
        if (!novaConsulta.id_paciente || novaConsulta.id_paciente.trim() === '') {
            return res.status(400).json({ error: 'ID do paciente é obrigatório' });
        }
        novaConsulta.id_paciente = new Date();
        const id_consulta = novaConsulta.idPaciente + inicio_consulta;
        const consultaCriada = await atendimentoDB.comecarConsulta(novaConsulta);
        res.status(201).json(consultaCriada);

    },

    getConsultaID : async (req, res) => {

    },

    finalizarConsulta : async (req, res) => {
    }
}
