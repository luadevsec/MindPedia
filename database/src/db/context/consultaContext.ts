import { Repository, FindOperator, IsNull, Not } from "typeorm";
import { Consulta } from "../model/consultaModel";
import AppDataSource from "../../dataSource";

class ConsultaContext {
    private static repoConsulta: Repository<Consulta> =  AppDataSource.getRepository(Consulta);

    static createConsulta(dataConsulta: Consulta){
        const consulta = this.repoConsulta.create(dataConsulta);
        return this.repoConsulta.save(consulta);
    }

    static getConsultaById(id: string){
        return this.repoConsulta.find({
            where: {
                paciente: { id: id },
            },
        });
    }

    static getNotasById(id: string){
        return this.repoConsulta.find({
            where: {
                paciente: { id: id },
                nota: Not(IsNull()),
            },
            select: ["nota"]
        });
    }

    static getResumoById(id: string){
        return this.repoConsulta.find({
            where: {
                paciente: { id: id },
                resumo: Not(IsNull()),
            },
            select: ["data", "resumo"]
        });
    }
}

export default ConsultaContext;
