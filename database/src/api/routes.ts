import express from "express";
import user from "./routes/userRoutes";
import consulta from "./routes/consultaRoutes"

const app = express();
app.use(express.json());

app.use('/user', user);
app.use('/consulta', consulta);

export default app;
