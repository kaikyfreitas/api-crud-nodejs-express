const express = require('express');
const itemsRouter = require('./src/routes/items');

const app = express();
const PORT = 3000;

// Middleware para permitir que o Express entenda requisições com corpo em JSON
app.use(express.json());

// Rota principal da API
app.get('/', (req, res) => {
    res.send('API CRUD com Node.js e Express está funcionando!');
});

// Usa o roteador de itens para todas as rotas que começam com /items
app.use('/items', itemsRouter);

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});