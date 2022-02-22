const express = require('express');
const fs = require('fs/promises');

const getTalkers = express.Router();

getTalkers.get('/', async (_req, res) => {
    try {
        const talkerFile = await fs.readFile('./talker.json', 'utf-8');
        const parsedTalker = JSON.parse(talkerFile);
        return res.status(200).json(parsedTalker);
    } catch (e) {
        return console.log('deu erro');
    }
});

getTalkers.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const talkerFile = await fs.readFile('./talker.json', 'utf-8');
    const parsedTalker = JSON.parse(talkerFile);
    const talker = parsedTalker.find((person) => person.id === Number(id));
    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).json(talker);
    } catch (e) {
        return console.log(e);
    }
});

module.exports = getTalkers;