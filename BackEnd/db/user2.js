const axios = require('axios');
const local = require('./config');
const testRequest = require('./user');

// Função para fazer a requisição no endpoint /test e imprimir a resposta
async function testRequest2(id) {
    try {
        const response = await axios.get(local+'/test/generic');
        console.log('Resposta da API2:', response.data);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

// Chama a função para fazer a requisição e imprimir o resultado
testRequest2();
