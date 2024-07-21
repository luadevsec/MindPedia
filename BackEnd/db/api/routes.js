import express from "express";
import { addUser, fetchUsers } from "../services/userFacade";

const app = express();
const port = 6990;

app.use(express.json());

app.get("/test/generic", (req, res) => {
  res.send("Esta é uma resposta genérica de um endpoint GET");
});

app.post("/test/generic", (req, res) => {
  res.send("Esta é uma resposta genérica de um endpoint POST");
});

app.get("/test/custom/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Esta é uma resposta personalizada para o ID ${id}`);
});

app.post("/test/custom", (req, res) => {
  const data = req.body;
  res.send(`Esta é uma resposta personalizada com os dados: ${JSON.stringify(data)}`);
});

app.post("/users", async (req, res) => {
  const { firstName, lastName, age } = req.body;
  try {
    const newUser = await addUser(firstName, lastName, age);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await fetchUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;
