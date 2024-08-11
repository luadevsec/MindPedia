import { Repository } from "typeorm";
import { User } from "../model/userModel";
import AppDataSource from "../dataSource";


class UserContext {
    private static repo: Repository<User> =  AppDataSource.getRepository(User);


    static createUser(dataUser : User) {
        const user = this.repo.create(dataUser);
        return this.repo.save(user);
    }

    static updateUser(dataUser : any) {
        console.log(dataUser);
        return this.repo.update(dataUser.id, dataUser);
    }

    static deleteUser(id: string) {
    
    }
    static getUserbyId(id: string){
        return this.repo.findOneBy({id});
    }

    
}

export default UserContext;