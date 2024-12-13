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
            order: {"data": "DESC"}
        });
    }

    static getNotasById(id: string){
        return this.repoConsulta.find({
            where: {
                paciente: { id: id },
                nota: Not(IsNull()),
            },
            select: ["nota"],
            order: {"data": "DESC"}
        });
    }

    static getResumoById(id: string){
        return this.repoConsulta.find({
            where: {
                paciente: { id: id },
                resumo: Not(IsNull()),
            },
            select: ["data", "resumo"],
            order: {"data": "DESC"}
        });
    }
}

export default ConsultaContext;
