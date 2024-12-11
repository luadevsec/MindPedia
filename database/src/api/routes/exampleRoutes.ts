import { Router } from "express";
import AgendarController from "../controllers/exampleReq";
import Ficha from "../controllers/exampleReq";

const example = Router();

example.post("/agendar", AgendarController.agendar);
example.post("/ficha", Ficha.ficha);
example.get("/fila",)/*recebe dia, mes e ano e retorna objeto{ 
                                         nConsultas: number,
                                         fila:{
                                            id: string, 
                                            nome: string, 
                                            hora: string}[]}*/
export default example;