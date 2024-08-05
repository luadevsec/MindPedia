import express from "express";
//import test from "./routes/testRoutes";
import user from "./routes/userRoutes";

const app = express();
app.use(express.json());

//app.use('/test', test);
app.use('/user', user);

export default app;
