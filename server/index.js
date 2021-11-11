const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

//require API
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = require('./config/apiConfig')

//require Database
const db = require('./db/index')

//require routes
const dbRouter = require('./routes/db-Crud-router') 
const homeRouter = require('./routes/spotify-Home-router')

//middleware.
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())

//dataBase
db.on('error',console.error.bind(console,'MongoDB connection error:'))

// Retrieve an access token from spotApi
spotifyApi
.clientCredentialsGrant()
.then(data => {
    console.log(data)
    spotifyApi.setAccessToken(data.body['access_token'])})
.catch(error => console.log('Something went wrong when retrieving an access token', error));



app.get('/',(req,res) =>{
    res.send('hello world')
})

app.use('/api',dbRouter)
app.use('/home',homeRouter)

app.listen(process.env.PORT,()=>console.log('i am Listening at',process.env.PORT))