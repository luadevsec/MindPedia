import { Router } from "express";
import AgendarController from "../controllers/exampleReq";
import Ficha from "../controllers/exampleReq";

const example = Router();

example.post("/agendar", AgendarController.agendar);
example.post("/ficha", Ficha.ficha);


export default example;