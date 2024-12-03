const { criarPaciente } = require('./services/pacienteService'); // Ajuste o caminho do arquivo conforme necessário

const cadastrarController = {
    cadastrar: (req, res) => {
        // O objeto paciente já vem dentro de req.body.paciente
        const paciente = req.body.paciente;

        // Gerar um ID único para o paciente (timestamp ou uuid)
        paciente.id = Date.now().toString(); // Exemplo de ID único baseado no timestamp

        // Chama a função criarPaciente, passando o objeto paciente
        criarPaciente(paciente);

        // Retorna a resposta com a confirmação de cadastro e o ID gerado
        return res.status(201).json({
            id: paciente.id // Retorna o ID gerado
        });
    }
};

module.exports = cadastrarController;
