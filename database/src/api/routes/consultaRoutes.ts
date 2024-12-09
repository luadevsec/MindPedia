import { Router } from "express";
import consultaController from "../controllers/consultaReq";

const consulta = Router();


consulta.post("/inicio", consultaController.createConsulta);

consulta.patch("/final", consultaController.finalizarConsulta);

consulta.get("/busca/:id", consultaController.getConsultaById);


export default consulta;