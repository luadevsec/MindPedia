import { Router } from "express";
import consultaController from "../controllers/consultaReq";
import exampleController from "../controllers/exampleReq";

const consulta = Router();


consulta.post("/add", consultaController.createConsulta);

consulta.post("/busca", consultaController.getHistoricoByPacienteId);   


export default consulta;