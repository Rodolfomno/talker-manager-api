const message = { message: 
    'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };

const validateRate = (req, res, next) => {
    try {
      const { rate } = req.body.talk;
      if (rate === undefined) {
        return res.status(400).json(message);
      }
      if ((rate < 1 || rate > 5)) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
      }
      return next();
    } catch (e) {
      return next(e);
    }
  };

  module.exports = validateRate;