const { readFile, writeFile } = require('fs/promises');

const createTalker = async (req, res, next) => {
    try {
        const { name, age, talk } = req.body;
        const talkers = JSON.parse(await readFile('./talker.json', 'utf-8'));
        const newTalker = {
          id: talkers.length + 1,
          name,
          age,
          talk,
        };
        talkers.push(newTalker);
        await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
        return res.status(201).json(newTalker);
    } catch (e) {
      return next(e);
    }
  };

module.exports = createTalker;