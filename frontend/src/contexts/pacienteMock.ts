import { Paciente, Resumo, Consulta, Nota, Agendamento } from '../contexts/pacienteTypes';

const Rmock: Resumo[] = [
    {
        data: '02/12/2024',
        conteudo: 'menstruada hoje'
    },
    {
        data: '01/01/2021',
        conteudo: 'notei que a paciente está com um quadro de depressão'
    },
    {
        data: '01/02/2021',
        conteudo: 'a paciente está com problemas de insônia'
    },
    {
        data: '01/03/2021',
        conteudo: 'a paciente está com problemas de ansiedade e estresse no trabalho' 
    }
];

const Nmock: Nota[] = [
    {
        data: '01/01/2021',
        conteudo: 'prescrevi um antidepressivo'
    },
    {
        data: '01/02/2021',
        conteudo: 'prescrevi um ansiolítico'
    }
];

const Cmock: Consulta[] = [
    {
        data: '02/12/2024',
        resumo: Rmock[0],
        notas: null
    },
    {
        data: '01/01/2021',
        resumo: 'notei que a paciente está com um quadro de depressão',
        notas: 'prescrevi um antidepressivo'
    },
    {
        data: '01/02/2021',
        resumo: 'a paciente está com problemas de insônia',
        notas: 'prescrevi um ansiolítico'
    },
    {
        data: '01/03/2021',
        resumo: 'a paciente está com problemas de ansiedade e estresse no trabalho',
        notas: null
    }
];

const Amock: Agendamento = {
    data: '09/12/2024',
    hora: '14:00'
};

const Pmock: Paciente = {
    id: 'mock',
    nome: 'Maria',
    genero: 'Feminino',
    sexualidade: 'Heterossexual',
    etnia: 'Parda',
    estadoCivil: 'Solteira',
    dataNascimento: '01/01/1990',
    naturalidade: 'São Paulo',
    nacionalidade: 'Brasileira',
    foto: '8',
    rg: '123456789',
    cpf: '123.456.789-00',
    profissao: 'Programadora',
    email: 'akskaks@skaskska.com',
    telefone: '(11) 91234-5678',
    hobby: ['Jogos', 'Programação', 'Tecnologia'],
    contatoEmergencia: {
        nome: 'João',
        parentesco: 'Pai',
        telefone: '(11) 98765-4321'
    }
};

export { Pmock, Rmock, Nmock, Cmock, Amock };