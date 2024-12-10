import { Request, Response } from 'express';
import UserContext from '../../db/context/userContext';

const AgendarController = { 
    agendar : async (req: Request, res: Response) => {
        try {
            const { id, agendamento } = req.body;
            await UserContext.updateAgendamento(id, agendamento);
            return res.status(200).json({ message: "Consulta agendada com sucesso!" });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao agendar consulta!" });
        }
    }
}
export default AgendarController;