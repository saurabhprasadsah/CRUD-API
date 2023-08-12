const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
//connection to Database
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology : true, useNewUrlparser: true},
    () => console.log("connected to db")
);

app.listen(4000, () =>{console.log("server up and runing on port 4000!")} )
