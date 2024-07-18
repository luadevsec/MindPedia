const fs = require('fs');
const { cpf } = require('cpf-cnpj-validator');

class Paciente {
  constructor(
    id,
    idFoto,
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
  ) {
    this.id = id;
    this.idFoto = idFoto;
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.sexualidade = sexualidade;
    this.genero = genero;
    this.numero = numero;
    this.numeroAux = numeroAux;
    this.email = email;
    this.estadoCivil = estadoCivil;
    this.profissao = profissao;
    this.etnia = etnia;
    this.hobby = hobby;
  }

  static todos() {
    try {
      const dados = fs.readFileSync('paciente.json');
      return JSON.parse(dados);
    } catch (err) {
      console.error('Erro ao carregar pacientes:', err);
      return [];
    }
  }

  static encontrarPorId(id) {
    const paciente = this.todos();
    return pacientes.find(p => p.id === id);
  }

  salvar() {
    const paciente = Paciente.todos();
    paciente.push(this);

    const dados = JSON.stringify(paciente, null, 2);
    try {
      fs.writeFileSync('paciente.json', dados);
    } catch (err) {
      console.error('Erro ao salvar paciente:', err);
    }
  }

  validarCPF() {
    return cpf.isValid(this.cpf);
  }

  validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}

module.exports = Paciente;
