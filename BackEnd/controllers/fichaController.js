const { getPaciente, getResumos, getNotas, getAgendamento, getConsultas } = require('./services/pacienteService'); // Ajuste o caminho do arquivo conforme necessário

const fichaController = {
    buscarFicha: async (req, res) => {
        const { id } = req.params; // Recupera o ID do paciente da URL

        try {
            // Verifica se o id foi fornecido
            if (!id) {
                return res.status(400).json({ message: "ID do paciente é obrigatório" });
            }

            // Buscar o paciente com o ID fornecido
            const paciente = await getPaciente(id);
            if (!paciente) {
                return res.status(404).json({ message: "Paciente não encontrado" });
            }

            // Buscar as informações adicionais do histórico e consultas
            const historico = {
                resumo: await getResumos(id),
                consultas: await getConsultas(id),
                notas: await getNotas(id)
            };

            // Se algum dos históricos for null ou inválido, podemos retornar um erro ou uma resposta padrão
            if (!historico.resumo || !historico.consultas || !historico.notas) {
                return res.status(500).json({ message: "Erro ao buscar informações adicionais do paciente" });
            }

            // Buscar o agendamento, se existir
            const agendamento = await getAgendamento(id);

            // Montar a carga ficha com os dados coletados
            const cargaFicha = {
                paciente,
                historico,
                agendamento
            };

            // Retornar a carga ficha para o cliente
            return res.status(200).json(cargaFicha);
        } catch (err) {
            console.error("Erro ao buscar a ficha do paciente:", err); // Log do erro mais detalhado
            return res.status(500).json({ message: "Erro ao buscar a ficha do paciente", error: err.message });
        }
    }
};

module.exports = fichaController;
