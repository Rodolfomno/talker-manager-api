const { readFile, writeFile } = require('fs/promises');

const editTalker = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, age, talk } = req.body;
        const talkers = JSON.parse(await readFile('./talker.json', 'utf-8'));
        const talkerIndex = talkers.findIndex((talker) => talker.id === Number(id));
        console.log(talkerIndex);
        if (talkerIndex === -1) {
            return res.status(404).json({ message: 'palestrante não encontrado' });
        }
        const updatedTalker = { name, age, id: Number(id), talk };
    
        talkers.splice(talkerIndex, 1, updatedTalker); 
    
        await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
        return res.status(200).json(updatedTalker);
    } catch (e) {
        return next(e);
    }
};

module.exports = editTalker;