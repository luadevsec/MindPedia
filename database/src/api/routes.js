import express from "express";
import test from "./routes/testRoutes";

const app = express();
app.use(express.json());

app.use('/test', test);

export default app;
