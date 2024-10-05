const axios = require('axios');
const local = require('./config');
const { listarPacientes, criarPaciente } = require('../models/pacienteModel');

// Função para fazer a requisição no endpoint /test e imprimir a resposta
const pacienteModel = {
    getUserID: async(id) => {
        try {
            const response = await axios.get(`${local}/user/busca/${id}`);
            console.log(response.data);
            return response.data.json;
        } catch (error) {
            console.error(error);
        }
    },
    listarPacientes: async() =>{
        try{
            const response = await axios.get(`${local}/all`);
            return response.data.json;
        }catch(error) {
            console.error(error);
        }
    },
    criarPaciente: async(paciente)=>{
        try{
            const response = await axios.post(`${local}/add`, paciente);
            return response.data.json;
        }catch(error){
            console.error(error);
        }
    }
    

}

// Chama a função para fazer a requisição e imprimir o resultado
if (require.main === module) {
    pacienteModel.getUserID().then((txt) => {
        console.log("iriri");
    });
}
module.exports = pacienteModel;