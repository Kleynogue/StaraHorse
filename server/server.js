const express = require('express');

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/", require("./routes/admin"));

port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);