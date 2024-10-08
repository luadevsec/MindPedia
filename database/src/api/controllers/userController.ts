import UserContext from '../../context/userContext';
import { Router, Request, Response } from "express";

const userController = {
    createUser: async (req: Request, res: Response) => {
        try{
            const user = await UserContext.createUser(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    getUserbyId: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await UserContext.getUserbyId(id);
            return res.send(`user ${JSON.stringify(user)}`);
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
            const id = req.params.id;
            await UserContext.deleteUser(id);
            return res.status(204);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    },
    getUsers: async(req: Request, res: Response) => {
        try{
            const users = await UserContext.getAllUsers();
            return res.json(users);
        }
        catch (error) {
            console.log(error); 
            return res.status((error as any).status);
        }
    }
}

export default userController;
