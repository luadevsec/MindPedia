// Exemplo de classe para manipular os pacientes no backend

class PacienteModel {
    id;
    nome;
    genero;
    sexualidade;
    etnia;
    estadoCivil;
    dataNascimento;
    naturalidade;
    nacionalidade;
    foto;
    cpf;
    profissao;
    email;
    telefone;
    hobby;
    contatoEmergencia;

    constructor(
      id,
      nome,
      genero,
      sexualidade,
      etnia,
      estadoCivil,
      dataNascimento,
      naturalidade,
      nacionalidade,
      foto,
      cpf,
      profissao,
      email,
      telefone,
      hobby,
      contatoEmergencia
    ) {
      this.id = id;
      this.nome = nome;
      this.genero = genero;
      this.sexualidade = sexualidade;
      this.etnia = etnia;
      this.estadoCivil = estadoCivil;
      this.dataNascimento = dataNascimento;
      this.naturalidade = naturalidade;
      this.nacionalidade = nacionalidade;
      this.foto = foto;
      this.cpf = cpf;
      this.profissao = profissao;
      this.email = email;
      this.telefone = telefone;
      this.hobby = hobby;
      this.contatoEmergencia = contatoEmergencia;
    }
  
    // Métodos adicionais podem ser adicionados aqui, como salvar no banco, validar dados, etc.
}

module.exports = { PacienteModel };
