import { Between, In, IsNull, Not, Repository } from "typeorm";
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
    static async agendamentosDia(dia: string) {
        // Converte o dia para início e fim do dia em formato ISO
        const inicioDoDia = new Date(dia);
        inicioDoDia.setUTCHours(0, 0, 0, 0);
    
        const fimDoDia = new Date(dia);
        fimDoDia.setUTCHours(23, 59, 59, 999);
    
        // Busca registros no intervalo do dia
        return this.repoUser.find({
            select: ["id", "nome", "agendamento"],
            where: {
                agendamento: Between(inicioDoDia.toISOString(), fimDoDia.toISOString()),
            },
        });
    }
    
    static async getAllAgendamentos() {
        return this.repoUser.find({
            select: ["id", "nome", "agendamento"],
        });
    }
    

    static async getUniqueAgendamentoDays(): Promise<string[]> {
        const users = await this.repoUser.find({
            select: ["agendamento"],
            where: { agendamento: Not(IsNull()) }, // Modifiquei o filtro para excluir nulos ou indefinidos
        });
        console.log(users);
    
        const uniqueDays = [...new Set(users
            .map(user => new Date(user.agendamento).toISOString().split("T")[0]) // Extrai a data
        )];
    
        return uniqueDays;
    }
    

}
export default UserContext;