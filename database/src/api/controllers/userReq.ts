import UserContext from '../../db/context/userContext';
import {Request, Response} from "express";
import id from '../utils/idGenerator';

const userReq = {
    createUser: async (req: Request, res: Response) => {
        console.log('sua requisição chegou no cadastro')
        try{
            const existente = await UserContext.getUserByEmail(req.body.paciente.email);
            if (existente) {
                return res.status(200).json("Usuário já existe.");
            }
            const newUser = req.body.paciente;
            newUser.id = id();
            const user = await UserContext.createUser(newUser);
            return res.status(201).json(user.id);
        }catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    getUserbyId: async (req: Request, res: Response) => {
        try {
            const id = req.body.id;
            const user = await UserContext.getUserbyId(id);
            if (user) {
                delete user.contatoEmergencia.userId;
            }
            return res.json(
                {
                    paciente: user,
                }
            );
        } 
        catch (error) {
            return res.status((error as any).status);
        }
    },
    updateUser: async(req: Request, res: Response) => {
        try{
            await UserContext.updateUser(req.body);
            return res.status(200);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    deleteUser: async(req: Request, res: Response) => {
        try{
            const id = req.body.id;
            await UserContext.deleteUser(id);
            return res.status(204);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    getUsers: async (req: Request, res: Response) => {
        try {
            const users = await UserContext.getAllUsers();
    
            const pacientes = users.map(user => ({
                id: user.id,
                nome: user.nome,
                foto: user.idFoto,
                consulta: user.agendamento,
                today: user.agendamento === new Date().toISOString().split('T')[0],
            }));
    
            return res.json({ pacientes });
        } catch (error) {
            console.log(error);
            return res.status((error as any).status || 500).json({ error: "Erro ao buscar usuários" });
        }
    },

    getUniqueAgendamentoDays: async (req: Request, res: Response) => {
        try {
            const dias = await UserContext.getUniqueAgendamentoDays();
            return res.json({ dias });
        } catch (error) {
            console.error(error);
            return res.status((error as any).status || 500).json({ error: "Erro ao buscar os dias de agendamento" });
        }
    },
    
    
}

export default userReq;
