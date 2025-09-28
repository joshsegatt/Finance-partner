// Importa o framework Express e o gerenciador de variáveis de ambiente
const express = require('express');
require('dotenv').config();

// Define a porta
const PORT = process.env.PORT || 4000;

// Inicializa a aplicação Express
const app = express();

// Middleware: Permite que a aplicação use JSON
app.use(express.json());

// Rota de Teste Simples
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'API Parceiro Financeiro está online!',
        version: '1.0.0'
    });
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`\nServidor rodando na porta ${PORT}`);
    console.log(`Verifique em: http://localhost:${PORT}`);
});
