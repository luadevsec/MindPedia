import { create } from "domain";
import ConsultaContext from "../../db/context/consultaContext";
import e, {Request, Response} from "express";

const consultaReq = {
    createConsulta: async (req: Request, res: Response) => {
        try{
            const consulta = await ConsultaContext.createConsulta(req.body);
            return res.status(201).json(consulta);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    finalizarConsulta: async (req: Request, res: Response) => {
        try{
            const consulta = await ConsultaContext.updateConsulta(req.body);
            return res.status(200).json(consulta);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    getConsultaById: async (req: Request, res: Response) => {
        try{
            const id = req.params.id;
            const consulta = await ConsultaContext.getConsultaById(id);
            return res.send(`consulta ${JSON.stringify(consulta)}`);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    }
}
export default consultaReq;