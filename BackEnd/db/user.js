const axios = require('axios');
const local = require('./config');

// Função para fazer a requisição no endpoint /test e imprimir a resposta
async function testRequest(id) {
    try {
        const response = await axios.get(local+'/test/generic');
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

// Chama a função para fazer a requisição e imprimir o resultado
if (require.main === module) {
    testRequest().then((txt) => {
        console.log(txt);
    });
}
