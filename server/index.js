const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require('./db/index')
const testRouter = require('./routes/test-router') 

require("dotenv").config();


app.use(cors());


db.on('error',console.error.bind(console,'MongoDB connection error:'))

app.get('/',(req,res) =>{
    res.send('hello world')
})
app.use('/api',testRouter)

app.listen(process.env.PORT,()=>console.log('i am Listening at',process.env.PORT))