const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { cpf } = require('cpf-cnpj-validator');
const cors = require('cors');

// Configuração CORS
app.use(cors());

function carregarPacientes() {
  if (!fs.existsSync('pacientes.json')) {
    return [];
  }

  try {
    const dados = fs.readFileSync('pacientes.json');
    return JSON.parse(dados);
  } catch (err) {
    console.error('Erro ao carregar pacientes:', err);
    return [];
  }
}

function salvarPacientes(pacientes) {
  const dados = JSON.stringify(pacientes, null, 2);
  try {
    fs.writeFileSync('pacientes.json', dados);
  } catch (err) {
    console.error('Erro ao salvar pacientes:', err);
  }
}

// Lista de pacientes (carregada do arquivo ou vazia)
let pacientes = carregarPacientes();

// Middleware para parsear JSON
app.use(express.json());

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

// Validação básica de email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rotas
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

app.post('/cadastro', (req, res) => {
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

 

  if (!isValidEmail(email)) {
    return res.status(400).json({ erro: "Email inválido." });
  }

  const novoPaciente = {
    id: uuidv4(),
    idFoto: getRandomInt(1, 11),
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
  };

  pacientes.push(novoPaciente);
  salvarPacientes(pacientes);

  res.status(201).json(novoPaciente);
});

app.get('/cardInfo', (req, res) => {
  const cardInfo = pacientes.map(paciente => ({
    nome: paciente.nome,
    id: paciente.id.toString(),
    data: new Date(paciente.data),
    imagem: paciente.imagem
  }));

  cardInfo.sort((a, b) => a.data - b.data);

  const cardInfoFormatado = cardInfo.map(info => ({
    ...info,
    data: info.data instanceof Date && !isNaN(info.data) ? info.data.toLocaleDateString('pt-BR') : 'Data inválida'
  }));

  res.json(cardInfoFormatado);
});

app.post('/ramCreate', (req, res) => {
  const nome = getRandomName();
  const novoPaciente = {
    id: uuidv4(),
    idFoto: getRandomInt(1, 11),
    nome: nome,
    cpf: getRandomCPF(),
    dataNascimento: getRandomDate(new Date('1960-01-01'), new Date('2006-12-31')),
    sexualidade: getRandomSexualidade(),
    genero: getRandomGenero(),
    numero: getRandomPhoneNumber(),
    numeroAux: getRandomPhoneNumber(),
    email: getRandomEmail(nome),
    estadoCivil: getRandomEstadoCivil(),
    profissao: getRandomProfissao(),
    etnia: getRandomEtnia(),
    hobby: getRandomHobby()
  };

  pacientes.push(novoPaciente);
  salvarPacientes(pacientes);

  res.status(201).json(novoPaciente);
});

app.get('/paciente/:id', (req, res) => {
  const pacienteId = req.params.id;
  const paciente = pacientes.find(p => p.id === pacienteId);

  if (!paciente) {
    return res.status(404).json({ erro: "Paciente não encontrado." });
  }

  const pacienteInfo = {
    id: paciente.id,
    idFoto: paciente.idFoto,
    nome: paciente.nome,
    cpf: paciente.cpf,
    dataNascimento: paciente.dataNascimento,
    idade: paciente.idade,
    sexualidade: paciente.sexualidade,
    genero: paciente.genero,
    numero: paciente.numero,
    numeroAux: paciente.numeroAux,
    email: paciente.email,
    estadoCivil: paciente.estadoCivil,
    profissao: paciente.profissao,
    etnia: paciente.etnia,
    hobby: paciente.hobby
  };

  res.json(pacienteInfo);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
