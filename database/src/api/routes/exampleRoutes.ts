import { Router } from "express";
import exampleController from "../controllers/exampleReq";
import Ficha from "../controllers/exampleReq";

const example = Router();

example.post("/agendar", exampleController.agendar);
example.post("/ficha", exampleController.ficha);
example.get("/fila", exampleController.fila);
example.post("/dia", exampleController.agendadamentosDia);

export default example;