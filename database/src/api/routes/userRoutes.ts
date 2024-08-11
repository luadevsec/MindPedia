import { Router } from "express";
import userController from "../controllers/userController";


const user = Router();


user.get("/busca/:id", userController.getUserbyId);

user.post("/add", userController.createUser);

user.patch("/update", userController.updateUser);



export default user;