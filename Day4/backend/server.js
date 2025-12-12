const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app=express()


env=require('dotenv').config();
const port=process.env.PORT;
const connection = require('./config/db');

connection();
app.use(express.json());
app.use(cors())

const studentRoutes =require("./routes/StudentRoute");

app.use("/api",studentRoutes)



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})