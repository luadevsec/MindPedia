const axios = require('axios');
const global = require('./config');

const local = `${global}/consulta`;

const atendimentoDB = {

    comecarConsulta: async(dataConsulta)=>{
        try{
            const response = await axios.post(`${local}/inicio`, dataConsulta);
            return response.data;
        }catch(error){
            console.error(error);
        }
    },
    getConsultaID: async(id) => {
        try {
            const response = await axios.get(`${local}/busca/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    finalizarConsulta: async(dataConsulta)=>{
        try{
            const response = await axios.patch(`${local}/final`, dataConsulta);
            return response.data;
        }catch(error){
            console.error(error);
        }
    },


}

module.exports = atendimentoDB;