const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const pacienteRoutes = require('./routes/pacienteRoutes');
app.use(cors());

app.use(express.json());

app.use('/pacientes', pacienteRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
