const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', 'db.json');

// Função auxiliar para ler o banco de dados
const readDB = () => {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
};

// Função auxiliar para escrever no banco de dados
const writeDB = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Rota para LER TODOS os itens (GET /items)
router.get('/', (req, res) => {
    const db = readDB();
    res.json(db.items);
});

// Rota para LER UM item por ID (GET /items/:id)
router.get('/:id', (req, res) => {
    const db = readDB();
    const item = db.items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send('Item não encontrado.');
    }
    res.json(item);
});

// Rota para CRIAR um novo item (POST /items)
router.post('/', (req, res) => {
    const db = readDB();
    const newItem = {
        id: Date.now(), // Gera um ID simples baseado no timestamp
        name: req.body.name,
        description: req.body.description
    };
    db.items.push(newItem);
    writeDB(db);
    res.status(201).json(newItem);
});

// Rota para ATUALIZAR um item por ID (PUT /items/:id)
router.put('/:id', (req, res) => {
    const db = readDB();
    const itemIndex = db.items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) {
        return res.status(404).send('Item não encontrado.');
    }
    const updatedItem = {
        ...db.items[itemIndex],
        name: req.body.name,
        description: req.body.description
    };
    db.items[itemIndex] = updatedItem;
    writeDB(db);
    res.json(updatedItem);
});

// Rota para DELETAR um item por ID (DELETE /items/:id)
router.delete('/:id', (req, res) => {
    const db = readDB();
    const newItems = db.items.filter(i => i.id !== parseInt(req.params.id));
    if (newItems.length === db.items.length) {
        return res.status(404).send('Item não encontrado.');
    }
    db.items = newItems;
    writeDB(db);
    res.status(204).send(); // 204 No Content - sucesso sem corpo de resposta
});

module.exports = router;