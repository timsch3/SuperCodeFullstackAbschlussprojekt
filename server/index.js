const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require('./db/index')

require("dotenv").config();

app.use(bodyParser.urlencoded({extand: true}))
app.use(cors());
app.use(bodyParser.json())

db.on('error',console.error.bind(console,'MongoDB connection error:'))

app.get('/',(req,res) =>{
    res.send('hello world')
})

app.listen(process.env.PORT,()=>console.log('i am Listening at',process.env.PORT))