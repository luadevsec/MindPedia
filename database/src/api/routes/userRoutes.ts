import { Router } from "express";
import userController from "../controllers/userReq";


const user = Router();


user.post("/busca", userController.getUserbyId);

user.post("/add", userController.createUser);

user.patch("/update", userController.updateUser);

user.post("/all", userController.getUsers);

user.delete("/delete/:id", userController.deleteUser);

user.get("/uniqueDays", userController.getUniqueAgendamentoDays);




export default user;