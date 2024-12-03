const { salvarConsulta } = require('./services/consultaService'); // Ajuste o caminho conforme necessário

const consultaController = {
    salvarConsulta: async (req, res) => {
        const { id } = req.params; // ID do paciente vindo da URL
        const { consulta } = req.body; // Carga com os dados da consulta

        try {
            // Verifica se os dados da consulta são válidos
            if (!consulta || !consulta.data) {
                return res.status(400).json({ message: "Dados da consulta inválidos" });
            }

            // Salva a consulta usando a função salvarConsulta
            const consultaSalva = await salvarConsulta(id, consulta);

            // Retorna a consulta salva como resposta
            return res.status(201).json(consultaSalva);
        } catch (err) {
            console.error("Erro ao salvar a consulta:", err);
            return res.status(500).json({ message: "Erro ao salvar a consulta", error: err.message });
        }
    }
};

module.exports = consultaController;
