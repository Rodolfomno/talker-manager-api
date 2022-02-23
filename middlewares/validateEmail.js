const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const validateEmail = (req, res, next) => {
    try {
       const { email } = req.body;
       if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
       if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
       }
       next();
    return next();
    } catch (e) {
        return next(e);
    }
};

module.exports = validateEmail;