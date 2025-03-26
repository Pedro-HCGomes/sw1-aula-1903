const express = require('express');
const  app = express();
const port = 3000;

app.get('/', ( request, response) => {
    response.set('Olá Codespaces!!!');
});

app.get('/mensagem/:nome', ( request, response) => {
    response.set('Boa Tarde ' + request.params['nome']);
});

app.listen(port, () => {
    console.log("Aplicação em execução na porta" + port);
});