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

module.exports = getTalkers;