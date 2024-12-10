import { Request, Response } from 'express';

const AgendarController = { 
    agendar : async (req: Request, res: Response) => {
        console.log(req.body)
        return res.status(200).json({ message: "Agendamento realizado com sucesso!" });
    }
}

export default AgendarController;