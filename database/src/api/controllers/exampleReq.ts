import { Request, Response } from 'express';
import UserContext from '../../db/context/userContext';
import ConsultaContext from '../../db/context/consultaContext';

const exampleController = { 
    agendar : async (req: Request, res: Response) => {
        try {
            const { id, agendamento } = req.body;
            await UserContext.updateAgendamento(id, agendamento);
            return res.status(200).json({ message: "Consulta agendada com sucesso!" });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao agendar consulta!" });
        }
    },
    ficha : async (req: Request, res: Response) => {
        try{
            const id = req.body.id;
            const user = await UserContext.getUserbyId(id);
            const resumos = await ConsultaContext.getResumoById(id);
            const notas = await ConsultaContext.getNotasById(id);
            const consultas = await ConsultaContext.getConsultaById(id);
            
            const historico = {
                resumos: resumos.map(resumo => resumo.resumo),
                notas: notas.map(nota => nota.nota),
                consultas: consultas.map(consulta => ({
                    data: consulta.data,
                    resumo: consulta.resumo || null,
                    notas: consulta.nota || null,
                })),
            };

            const ficha = {
                paciente: user,
                historico: historico
            };
            return res.status(200).json(ficha);

        }catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    fila: async (req: Request, res: Response) => {
        const dia = req.params.dia;

        try {
            const agendamentos = await UserContext.agendamentosDia(dia);

            const agendamentosD = agendamentos.map(user => ({
                nConsultas: agendamentos.length,
                fila: {
                    id: user.id,
                    nome: user.nome,
                    hora: user.agendamento
                }
            }));
            return res.status(200).json(agendamentosD);

        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "Erro ao buscar fila!"});
        }
    
    },
    agendadamentosDia: async (req: Request, res: Response) => {
        const dia = req.params.dia;
        console.log(dia)

        try {
            const agendamentos = await UserContext.agendamentosDia(dia);

            const consultas = agendamentos.map(user => ({
                today: agendamentos.length,
                paciente: {
                    id: user.id,
                    nome: user.nome,
                    hora: user.agendamento.split('T')[1].split(':').slice(0, 2).join(':')
                }
            }));
            return res.status(200).json(consultas);
            
        }  catch (error) {  
            console.log(error);
            return res.status(400).json({message: "Erro ao buscar agendamentos!"});
        }
    }

}
export default exampleController;