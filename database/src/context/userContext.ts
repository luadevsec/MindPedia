import { DataSource, Repository } from "typeorm";
import { User } from "../model/userModel";
import { getRepository } from "typeorm";
import AppDataSource from "../dataSource";

/**
 * Represents the user context.
 * This class provides methods and properties related to the user context.
 */
class UserContext {
    private repo: Repository<User>;

    constructor() {
        this.repo = AppDataSource.getRepository(User);
        
    }

    /**
     * Returns the user's name.
     */
    getUserbyId(id: string): Promise<User | null> {
        return this.repo.findOneBy({id});
    }

    
}

export default UserContext;