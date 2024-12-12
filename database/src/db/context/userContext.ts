import { In, Repository } from "typeorm";
import { User } from "../model/userModel";
import AppDataSource from "../../dataSource";

class UserContext {
    private static repoUser: Repository<User> =  AppDataSource.getRepository(User);

    static createUser(dataUser : User) {
        if (dataUser.contatoEmergencia) {
            const contatoEmergencia = dataUser.contatoEmergencia;
            contatoEmergencia.userId = dataUser.id;
        }
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
        return this.repoUser.findOne({
            where: {id: id},
            relations: ["contatoEmergencia"]
        })
    }
    static getAllUsers(){
        return this.repoUser.find({
            select: ["id", "nome", "idFoto", "agendamento"],
            order: {
                agendamento: {
                    direction: "ASC",
                    nulls: "LAST"
                }
            }
        });
    }

    static getUserByEmail(emailUser: string){
        return this.repoUser.findOne({ 
            select:{ id: true },
            where: { email: emailUser}
        });
    }

    static updateAgendamento(id: string, agendamento: string){
        return this.repoUser.update(id, {agendamento});
    }

    static agendamentosDia(dia: string){
        return this.repoUser.find({
            select: ["id", "nome", "agendamento"],
            where: {agendamento: dia}
        });
    }

    static async getUniqueAgendamentoDays(): Promise<string[]> {
        const users = await this.repoUser.find({
            select: ["agendamento"],
            where: { agendamento: In([null, undefined]) },
        });

        const uniqueDays = [...new Set(users
            .filter(user => user.agendamento) // Remove agendamentos nulos ou indefinidos
            .map(user => new Date(user.agendamento).toISOString().split("T")[0]) // Extrai apenas a data
        )];

        return uniqueDays;
    }

}
export default UserContext;