import express from "express";
import cors from "cors"; // Importa o middleware de CORS
import user from "./routes/userRoutes";
import consulta from "./routes/consultaRoutes";
import example from "./routes/exampleRoutes";

const app = express();

// Configuração do CORS
app.use(cors({
    origin: "*", // Permita o acesso de qualquer origem
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    credentials: true // Habilite se precisar enviar cookies ou cabeçalhos de autenticação
}));

// Middleware para JSON
app.use(express.json());

// Suas rotas
app.use('/user', user);
app.use('/consulta', consulta);
app.use('/example', example);

export default app;
