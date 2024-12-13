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
                resumos: resumos.map(resumo => ({
                    data: resumo.data,
                    conteudo: resumo.resumo
                })),
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
        const dia = req.body.dia; // Dia no formato "YYYY-MM-DD"
        console.log(dia);
    
        try {
            // Busca todos os agendamentos do banco
            const todosAgendamentos = await UserContext.getAllAgendamentos();
    
            // Filtra os agendamentos do dia solicitado
            const agendamentosDoDia = todosAgendamentos.filter(user => 
                user.agendamento.startsWith(dia)
            );
    
            // Agrupa os agendamentos por dia
            const agendamentosAgrupados = [...new Set(todosAgendamentos.map(user => 
                user.agendamento.split('T')[0]
            ))].map(d => ({
                dia: d,
                pacientes: todosAgendamentos
                    .filter(user => user.agendamento.startsWith(d))
                    .map(user => ({
                        id: user.id,
                        nome: user.nome,
                        hora: user.agendamento.split('T')[1].split(':').slice(0, 2).join(':'),
                    })),
            }));
    
            // Retorna o total de consultas para o dia e os agendamentos agrupados
            return res.status(200).json({
                today: agendamentosDoDia.length,
                agendamentos: agendamentosAgrupados,
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Erro ao buscar agendamentos!" });
        }
    },    
    

}
export default exampleController;