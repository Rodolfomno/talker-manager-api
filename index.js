const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalkers');
const { errorHandler, loginResponse } = require('./controllers/index');
const { validateEmail, validatePassword } = require('./middlewares/index');

const loginValidation = [validateEmail, validatePassword];

const app = express();
app.use(bodyParser.json());
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

app.post('/login', loginValidation, loginResponse);
app.use(errorHandler);