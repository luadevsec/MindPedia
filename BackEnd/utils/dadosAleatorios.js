const { v4: uuidv4 } = require('uuid');

const nomes = ["Ana Silva", "João Souza", "Maria Oliveira", "Carlos Santos", "Juliana Pereira"];
const cpfs = ["123.456.789-00", "987.654.321-11", "456.789.123-22", "789.123.456-33", "234.567.890-44"];
const sexualidades = ["Heterossexual", "Homossexual", "Bissexual"];
const generos = ["Masculino", "Feminino", "Outro"];
const estadosCivis = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"];
const profissoes = ["Engenheiro(a)", "Médico(a)", "Professor(a)", "Advogado(a)", "Programador(a)"];
const etnias = ["Branca", "Negra", "Parda", "Indígena", "Amarela"];
const hobbies = ["Ler", "Viajar", "Cozinhar", "Jogar", "Pintar"];

exports.gerarPacienteAleatorio = () => {
  const dataNascimento = gerarDataNascimentoAleatoria();

  return {
    id: uuidv4(),
    idFoto: getRandomInt(1, 11),
    nome: nomes[getRandomInt(0, nomes.length)],
    cpf: cpfs[getRandomInt(0, cpfs.length)],
    dataNascimento: dataNascimento.toISOString().split('T')[0],
    sexualidade: sexualidades[getRandomInt(0, sexualidades.length)],
    genero: generos[getRandomInt(0, generos.length)],
    numero: gerarNumeroTelefoneAleatorio(),
    numeroAux: gerarNumeroTelefoneAleatorio(),
    email: gerarEmailAleatorio(),
    estadoCivil: estadosCivis[getRandomInt(0, estadosCivis.length)],
    profissao: profissoes[getRandomInt(0, profissoes.length)],
    etnia: etnias[getRandomInt(0, etnias.length)],
    hobby: hobbies[getRandomInt(0, hobbies.length)]
  };
};

function gerarDataNascimentoAleatoria() {
  const hoje = new Date();
  const anoMinimo = hoje.getFullYear() - 80; // Idade mínima de 18 anos
  const anoMaximo = hoje.getFullYear() - 18; // Idade máxima de 80 anos
  const ano = getRandomInt(anoMinimo, anoMaximo + 1);
  const mes = getRandomInt(0, 12); // 0-11 (janeiro a dezembro)
  const dia = getRandomInt(1, 29); // Simplificando para evitar problemas com meses diferentes
  return new Date(ano, mes, dia);
}

function gerarNumeroTelefoneAleatorio() {
  const ddd = getRandomInt(11, 99);
  const prefixo = getRandomInt(90000, 99999);
  const sufixo = getRandomInt(1000, 9999);
  return `(${ddd}) ${prefixo}-${sufixo}`;
}

function gerarEmailAleatorio() {
  const nome = nomes[getRandomInt(0, nomes.length)].split(' ')[0].toLowerCase();
  const provedor = getRandomInt(0, 2) === 0 ? 'gmail' : 'hotmail';
  const dominio = '.com';
  return `${nome}@${provedor}${dominio}`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
