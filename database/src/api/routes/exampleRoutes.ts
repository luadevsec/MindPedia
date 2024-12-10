import { Router } from "express";
import verifyController from "../controllers/verifyController";
import AgendarController from "../controllers/smpAgendarController";

const example = Router();

example.post("/verify", verifyController.verify);
example.post("/agendar", AgendarController.agendar);


export default example;