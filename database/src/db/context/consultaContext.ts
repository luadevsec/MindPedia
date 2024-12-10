import { Repository } from "typeorm";
import { Consulta } from "../model/consultaModel";
import AppDataSource from "../../dataSource";

class consultaContext {
    private static repoConsulta: Repository<Consulta> =  AppDataSource.getRepository(Consulta);

    static createConsulta(dataConsulta: Consulta){
        const consulta = this.repoConsulta.create(dataConsulta);
        return this.repoConsulta.save(consulta);
    }

    static async getConsultaById(id: string){
        const consulta = await this.repoConsulta.find({
            where: {
                paciente: { id: id },  // Use o nome correto do campo da sua entidade que está associado ao ID.
            },
        });
        console.log(consulta);
        return consulta;
    }
}

export default consultaContext;