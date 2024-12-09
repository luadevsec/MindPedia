import { Repository } from "typeorm";
import { Consulta } from "../model/consultaModel";
import AppDataSource from "../../dataSource";

class consultaContext {
    private static repoConsulta: Repository<Consulta> =  AppDataSource.getRepository(Consulta);

    static createConsulta(dataConsulta: Consulta){
        const consulta = this.repoConsulta.create(dataConsulta);
        return this.repoConsulta.save(consulta);
    }
    static updateConsulta(dataConsulta: Consulta){
        return this.repoConsulta.update(dataConsulta.id_paciente, dataConsulta)
    }
    static getConsultaById(id: string){
        return this.repoConsulta.findOne({
            where: {
                id_paciente: id,  // Use o nome correto do campo da sua entidade que está associado ao ID.
            },
        });
    }
}

export default consultaContext;