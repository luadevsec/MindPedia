import { Repository } from "typeorm";
import { User } from "../model/userModel";
import AppDataSource from "../dataSource";

class UserContext {
    private static repoUser: Repository<User> =  AppDataSource.getRepository(User);

    static createUser(dataUser : User) {
        const user = this.repoUser.create(dataUser);
        return this.repoUser.save(user);
    }
    static updateUser(dataUser : User) {
        return this.repoUser.update(dataUser.id, dataUser);
    }
    static deleteUser(id: string) {
        return this.repoUser.delete({id});
    }
    static getUserbyId(id: string){
        return this.repoUser.findOneBy({id});
    }
    static getAllUsers(){
        return this.repoUser.find();
    }
}

export default UserContext;