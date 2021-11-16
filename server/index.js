const express = require('express');
const cookieSession = require('cookie-session')
const passportSetup = require('./config/passportConfig')
const passport = require('passport');
//const passportLocalMongoose = require('passport-local-mongoose');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const findOrCreate = require('mongoose-findorcreate');
const User = require('./models/user-model')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require("dotenv").config();

//require API
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = require('./config/apiConfig')

//require Database
const db = require('./db/index')

//require routes
const dbRouter = require('./routes/db-Crud-router')
const homeRouter = require('./routes/spotify-Home-router');
const authrouter = require('./routes/google-auth-routes')
const { Mongoose } = require('mongoose');

//middleware.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:8000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

//dataBase
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
mongoose.connect(process.env.DBKEY, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

//cookies
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

//passport init
app.use(passport.initialize());
//passport session
app.use(passport.session());


 // Retrieve an access token from spotApi
 spotifyApi
 .clientCredentialsGrant()
 .then(data => {
  // console.log(data)
   spotifyApi.setAccessToken(data.body['access_token'])
 })
 .catch(error => console.log('Something went wrong when retrieving an access token', error));

//google auth route
app.use('/auth',authrouter)



//db Crud routing
app.use('/api', dbRouter)
//API
app.use('/', homeRouter)

app.listen(process.env.PORT, () => console.log('i am Listening at', process.env.PORT))