const axios = require('axios');
const global = require('./config');

const local = 'http://127.0.0.1:6990/user';
// Função para fazer a requisição no endpoint /test e imprimir a resposta
const pacienteModel = {
    getUserID: async(id) => {
        try {
            const response = await axios.get(`${local}/user/busca/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    listarPacientes: async() =>{
        try{
            const response = await axios.get(`${local}/user/all`);
            return response.data;
        }catch(error) {
            console.error(error);
        }
    },
    criarPaciente: async(paciente)=>{
        try{
            const response = await axios.post(`${local}/user/add`, paciente);
            return response.data;
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