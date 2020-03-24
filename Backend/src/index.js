const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

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

app.listen(3333, () => console.log("Servidor conectado!"))