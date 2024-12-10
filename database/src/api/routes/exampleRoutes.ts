import { Router } from "express";
import AgendarController from "../controllers/smpAgendarController";

const example = Router();

example.post("/agendar", AgendarController.agendar);
example.get("/ficha", AgendarController.ficha);


export default example;