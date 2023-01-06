const express = require('express');
const cors = require('cors');

const app = express();

const corsOption = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption));
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 


app.use("/", require("./routes/admin"));
port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);
