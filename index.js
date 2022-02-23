const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalkers');

const { errorHandler, loginResponse, createTalker,
   editTalker, deleteTalker, searchTalker } = require('./controllers/index');

const { validateEmail, validatePassword, validateAge,
  validateDate, validateName, validateRate,
  validateTalk, validateToken } = require('./middlewares/index');

const validateLogin = [validateEmail, validatePassword];
const validateTalker = [validateToken, validateName,
  validateAge, validateTalk, validateDate, validateRate];

const app = express();
app.use(bodyParser.json());
app.get('/talker/search', validateToken, searchTalker);
app.use('/talker', getTalkers);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
app.listen(PORT, () => {
  console.log('Online');
});

app.post('/login', validateLogin, loginResponse);
app.post('/talker', validateTalker, createTalker);

app.put('/talker/:id', validateTalker, editTalker);

app.delete('/talker/:id', validateToken, deleteTalker);

app.use(errorHandler);