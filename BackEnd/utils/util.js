const { v4: uuidv4 } = require('uuid');

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarPacienteAleatorio() {
  const nomes = ["Alice", "Miguel", "Sophia", "Arthur", "Helena", "Bernardo", "Valentina", "Heitor", "Laura", "Davi"];
  const sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"];
  const generos = ["Masculino", "Feminino", "Outro"];
  const sexualidades = ["Heterossexual", "Homossexual", "Bissexual", "Pansexual", "Assexual"];
  const estadosCivis = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"];
  const profissoes = ["Engenheiro(a)", "Professor(a)", "Médico(a)", "Advogado(a)", "Administrador(a)"];
  const etnias = ["Branca", "Negra", "Parda", "Amarela", "Indígena"];
  const hobbies = ["Leitura", "Esportes", "Música", "Viagens", "Cinema"];

  return {
    id: uuidv4(),
    nome: `${nomes[gerarNumeroAleatorio(0, nomes.length - 1)]} ${sobrenomes[gerarNumeroAleatorio(0, sobrenomes.length - 1)]}`,
    cpf: `${gerarNumeroAleatorio(100, 999)}.${gerarNumeroAleatorio(100, 999)}.${gerarNumeroAleatorio(100, 999)}-${gerarNumeroAleatorio(10, 99)}`,
    dataNascimento: `${gerarNumeroAleatorio(1950, 2000)}-${gerarNumeroAleatorio(1, 12)}-${gerarNumeroAleatorio(1, 28)}`, 
    sexualidade: sexualidades[gerarNumeroAleatorio(0, sexualidades.length - 1)],
    genero: generos[gerarNumeroAleatorio(0, generos.length - 1)],
    numero: `(${gerarNumeroAleatorio(11, 99)}) 9${gerarNumeroAleatorio(1000, 9999)}-${gerarNumeroAleatorio(1000, 9999)}`,
    numeroAux: `(${gerarNumeroAleatorio(11, 99)}) ${gerarNumeroAleatorio(1000, 9999)}-${gerarNumeroAleatorio(1000, 9999)}`,
    email: `${nomes[gerarNumeroAleatorio(0, nomes.length - 1)].toLowerCase()}.${sobrenomes[gerarNumeroAleatorio(0, sobrenomes.length - 1)].toLowerCase()}@examplo.com`,
    estadoCivil: estadosCivis[gerarNumeroAleatorio(0, estadosCivis.length - 1)],
    profissao: profissoes[gerarNumeroAleatorio(0, profissoes.length - 1)],
    etnia: etnias[gerarNumeroAleatorio(0, etnias.length - 1)],
    hobby: hobbies[gerarNumeroAleatorio(0, hobbies.length - 1)],
  };
}

module.exports = { gerarPacienteAleatorio };