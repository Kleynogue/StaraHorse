const express = require('express');
const { pool } = require('./pg.js');

const app = express();



app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);



//-------------------
app.get('/iniciar_sesion', (req, res) => {
    pool.getLugar()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
