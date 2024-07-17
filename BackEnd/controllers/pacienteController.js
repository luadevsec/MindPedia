const Paciente = require('../models/paciente');
const { v4: uuidv4 } = require('uuid');

// Funções para gerar dados aleatórios
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(startDate, endDate) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = getRandomInt(startTimestamp, endTimestamp);

  const randomDate = new Date(randomTimestamp);

  const year = randomDate.getFullYear();
  const month = ('0' + (randomDate.getMonth() + 1)).slice(-2);
  const day = ('0' + randomDate.getDate()).slice(-2);

  return `${day}-${month}-${year}`;
}

function getRandomName() {
  const nomes = ['Alice', 'Bob', 'Carlos', 'Diana', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Julia'];
  return nomes[getRandomInt(0, nomes.length - 1)];
}

function getRandomEmail(name) {
  const domains = ['exemplo.com', 'teste.com', 'demo.com'];
  return `${name.toLowerCase()}@${domains[getRandomInt(0, domains.length)]}`;
}

function getRandomCPF() {
  return cpf.generate();
}

function getRandomPhoneNumber() {
  const prefix = getRandomInt(10, 99);
  const middle = getRandomInt(10000, 99999);
  const suffix = getRandomInt(1000, 9999);
  return `(${prefix}) ${middle}-${suffix}`;
}

function getRandomSexualidade() {
  const sexualidadeOptions = ['Heterossexual', 'Homossexual', 'Bissexual', 'Pansexual', 'Assexual', 'Outro'];
  return sexualidadeOptions[getRandomInt(0, sexualidadeOptions.length - 1)];
}

function getRandomGenero() {
  const generoOptions = ['Feminino', 'Masculino', 'Não-Binário', 'Outro'];
  return generoOptions[getRandomInt(0, generoOptions.length - 1)];
}

function getRandomEtnia() {
  const etniaOptions = ['Branca', 'Negra', 'Indígena', 'Parda', 'Amarela', 'Asiática', 'Outra'];
  return etniaOptions[getRandomInt(0, etniaOptions.length - 1)];
}

function getRandomEstadoCivil() {
  const estadoCivilOptions = ['Solteiro', 'Casado', 'Divorciado', 'Viúvo', 'Outro'];
  return estadoCivilOptions[getRandomInt(0, estadoCivilOptions.length - 1)];
}

function getRandomProfissao() {
  const profissoes = ['Engenheiro', 'Médico', 'Professor', 'Artista', 'Desenvolvedor', 'Advogado', 'Músico', 'Jornalista'];
  return profissoes[getRandomInt(0, profissoes.length - 1)];
}

function getRandomHobby() {
  const hobbies = ['Leitura', 'Esportes', 'Música', 'Viagens', 'Fotografia', 'Gastronomia', 'Jogos'];
  return hobbies[getRandomInt(0, hobbies.length - 1)];
}

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

  //if (!novoPaciente.validarCPF()) {
    //return res.status(400).json({ erro: "CPF inválido." });
  //}

  if (!novoPaciente.validarEmail()) {
    return res.status(400).json({ erro: "Email inválido." });
  }
  

  novoPaciente.salvar();
  res.status(201).json(novoPaciente);
};

// Controller para criar um paciente com dados aleatórios
exports.criarPacienteAleatorio = (req, res) => {
  const nome = getRandomName();
  const novoPaciente = new Paciente(
    uuidv4(),
    getRandomInt(1, 11), // idFoto aleatório
    nome,
    getRandomCPF(),
    getRandomDate(new Date('1970-01-01'), new Date('2020-12-31')),
    getRandomSexualidade(),
    getRandomGenero(),
    getRandomPhoneNumber(),
    getRandomPhoneNumber(),
    getRandomEmail(nome),
    getRandomEstadoCivil(),
    getRandomProfissao(),
    getRandomEtnia(),
    getRandomHobby()
  );

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
