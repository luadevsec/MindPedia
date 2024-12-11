import { Request, Response } from 'express';
import UserContext from '../../db/context/userContext';
import ConsultaContext from '../../db/context/consultaContext';

const AgendarController = { 
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
        console.log('sua requisição chegou')
        console.log(req.body);
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
            }
            console.log(ficha);

            return res.status(200).json(ficha);

        }catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    }
}
export default AgendarController;