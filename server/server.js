const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const corsOption = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(morgan('combined'));
app.use(cors(corsOption));
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 


app.use("/", require("./routes/reports"));
app.use("/", require("./routes/login"));
app.use("/", require("./routes/bet"));
app.use("/", require("./routes/admin"));
port = 80;
app.listen(port);
console.log(`Server on port ${port}`);