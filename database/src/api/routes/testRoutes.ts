/*import { Router } from "express";

//import { custonID } from '../controllers/testControllers.';

// test is in /test /endpoints
const test = Router();

test.get("/generic", (_, res) => {
    res.send("Esta é uma resposta genérica de um endpoint GET");
});

test.post("/generic", async (req, res) => {
    try {
        const user = await addUser(req.body);
        return res.status(201).json(user); // Retorna o usuário criado com status 201 (Created)
    } catch (error) {
        return res.status((error as any).status);
    }
});

//test.get("/custom/:id", custonID());

test.post("/custom", (req, res) => {
    const data = req.body;
    res.send(`Esta é uma resposta personalizada com os dados: ${JSON.stringify(data)}`);
});

export default test;
*/