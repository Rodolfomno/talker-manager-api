const validateDate = (req, res, next) => {
    try {
      const { watchedAt } = req.body.talk;
  
      if (!watchedAt) {
        return res.status(400).json(
          { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
        ); 
      }
      if (!watchedAt.includes('/')) {
        return res.status(400).json(
          { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
        ); 
      }
      return next();
    } catch (e) {
      return next(e);
    }
  };

module.exports = validateDate;