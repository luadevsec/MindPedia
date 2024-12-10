import { Resumo, Consulta, Nota, Carga, Agendamento } from './typeMock';
import { Paciente } from '../../../contexts/paciente';


const Pmock: Paciente = {
    id: 'mock',
    nome: 'Dany PLS',
    genero: 'Feminino',
    sexualidade: 'Pansexual',
    etnia: 'Não especificada',
    estadoCivil: 'Casada',
    dataNascimento: '22/10/2003',
    naturalidade: 'peoence',
    nacionalidade: 'Brasileira',
    foto: '7',
    profissao: 'Ajudante de tudo um pouco',
    email: 'lunna.cipher@exemplo.com',
    telefone: '(11) 4002-8922',
    contatoEmergencia: {
        nome: 'Luazinha',
        parentesco: 'Muie',
        telefone: '(11) 98765-4321'
    }
};

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

const CargaMock: Carga = {
    paciente: Pmock,
    historico: {
        resumo: Rmock,
        consultas: Cmock,
        notas: Nmock
    },
    agendamento: Amock
}


const Mock = () => CargaMock;
export default Mock;