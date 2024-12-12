import ConsultaContext from "../../db/context/consultaContext";
import e, {Request, Response} from "express";

const consultaReq = {
    createConsulta: async (req: Request, res: Response) => {
        try{
            const consulta = await ConsultaContext.createConsulta(req.body.consulta);
            console.log(consulta);
            console.log(req.body.consulta);
            return res.status(201).json(consulta);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },

    getHistoricoByPacienteId: async (req: Request, res: Response) => {
        try{
            const id = req.body.id;
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
            return res.status(200).json(historico);

        }catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    }
}
export default consultaReq;