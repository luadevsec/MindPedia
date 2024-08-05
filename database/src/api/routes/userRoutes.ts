import { Router } from "express";
import UserContext from "../../context/userContext";


const user = Router();


user.get("/busca/:id", (req, res) => {
    try {
        const user = new UserContext();
        const id = req.params.id;
        user.getUserbyId(id).then((user) => res.send(`user ${user}`));
    } catch (error) {
        return res.status((error as any).status);
    }
});



export default user;