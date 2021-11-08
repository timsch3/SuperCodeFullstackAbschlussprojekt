const mongoose = require('mongoose');
require("dotenv").config();


mongoose
.connect(process.env.DBKEY,{useNewUrlParser: true})
.catch(e =>{
    console.log('conection Error',e.message)
})

const db = mongoose.connection

module.exports = db