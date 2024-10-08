const express = require('express');
const bodyParser = require('body-parser');
const pacienteRoutes = require('./routes/pacienteRoutes');

const app = express();
const port = 8080;
const cors = require('cors');

// Configuração CORS
app.use(cors());


app.use(bodyParser.json()); 
app.use('/pacientes', pacienteRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta 8080`);
});