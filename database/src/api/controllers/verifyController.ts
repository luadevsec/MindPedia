import e, { Request, Response } from 'express';

const verifyController = {
    async verify(req: Request, res: Response) {
        const haves = ['Lunnas', 'dany', 'Jones' ];
        const { username } = req.body;
        if (haves.includes(username)) {
            return res.status(401).json({ message: "Nome de usuário já existe" });
        } else {
            return res.status(200).json({ message: "Nome de usuário disponível" });
        }
    }
};

export default verifyController;