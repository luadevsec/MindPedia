import { Router } from "express";
import userController from "../controllers/userController";


const user = Router();


user.get("/busca/:id", userController.getUserbyId);

user.get("/all", userController.getUsers);

user.post("/add", userController.createUser);

user.patch("/update", userController.updateUser);

user.delete("/delete/:id", userController.deleteUser);



export default user;