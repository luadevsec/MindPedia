const Paciente = require('../models/paciente');
const { v4: uuidv4 } = require('uuid');

exports.listarPacientes = (req, res) => {
  const pacientes = Paciente.todos();
  res.json(pacientes);
};

exports.criarPaciente = (req, res) => {
  const {
    nome,
    cpf,
    dataNascimento,
    sexualidade,
    genero,
    numero,
    numeroAux,
    email,
    estadoCivil,
    profissao,
    etnia,
    hobby
  } = req.body;

  const novoPaciente = new Paciente(
    uuidv4(),
    getRandomInt(1, 11),
    nome,
    cpf,
    dataNascimento,
    sexualidade,
    genero,
    numero,
    numeroAux,
    email,
    estadoCivil,
    profissao,
    etnia,
    hobby
  );

  // if (!novoPaciente.validarCPF()) {
  //   return res.status(400).json({ erro: "CPF inválido." });
  // }

  if (!novoPaciente.validarEmail()) {
    return res.status(400).json({ erro: "Email inválido." });
  }

  novoPaciente.salvar();
  res.status(201).json(novoPaciente);
};

exports.obterPaciente = (req, res) => {
  const pacienteId = req.params.id;
  const paciente = Paciente.encontrarPorId(pacienteId);

  if (!paciente) {
    return res.status(404).json({ erro: "Paciente não encontrado." });
  }

  res.json(paciente);
};

// Controller para obter informações resumidas do pacientes (cardInfo)
exports.obterCardInfo = (req, res) => {
  const pacientes = Paciente.todos();
  const cardInfo = pacientes.map(paciente => ({
    nome: paciente.nome,
    id: paciente.id.toString(),
    dataNascimento: paciente.dataNascimento,
    idFoto: paciente.idFoto 
  }));

  cardInfo.sort((a, b) => new Date(a.dataNascimento) - new Date(b.dataNascimento));

  res.json(cardInfo);
};

const dadosAleatorios = require('../utils/dadosAleatorios');

exports.ramCreate = (req, res) => {
  const novoPaciente = new Paciente(dadosAleatorios.gerarPacienteAleatorio());
  novoPaciente.salvar();
  res.status(201).json(novoPaciente);
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
