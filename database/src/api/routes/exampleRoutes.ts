import { Router } from "express";
import verifyController from "../controllers/verifyReq";

const example = Router();

example.post("/verify", verifyController.verify);


export default example;