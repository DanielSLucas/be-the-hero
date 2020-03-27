const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate'); //biblioteca para validação de formulários. Importanto "errors".
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())// usando a função "errors()" para ter melhor retorno quando a valitadção retornar um erro


// métodos HTTP:  GET, POST, PUT, DELETE

// tipos de parâmetros:
//     Query params: parâmetros nomeados enviuados na rota após o "?" (filtros, paginação)
//     Route params: parâmetros utilizados para identificar recursos
//     Request Body: corpo da requisição, utilizado para criar ou alterar recursos

/* 
    SQL ou NoSQL

    utilzaremos SQLlite

    três abordagens:
    Driver: 
*/

module.exports = app;