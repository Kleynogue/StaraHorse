const express = require('express');
// const { pool } = require('./pg.js');

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);