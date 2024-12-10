import { Router } from "express";
import consultaController from "../controllers/consultaReq";

const consulta = Router();


consulta.post("/add", consultaController.createConsulta);

consulta.get("/busca/:id", consultaController.getConsultaById);


export default consulta;