const express = require('express');
const session = require("express-session");
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
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
const { Mongoose } = require('mongoose');

//middleware.
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())

//dataBase
db.on('error',console.error.bind(console,'MongoDB connection error:'))
mongoose.connect(process.env.DBKEY, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true});


app.use(session({
    secret:'Our little secret',
    resave:false,
    saveUninitialized:false,
}));

//passport init
app.use(passport.initialize());
app.use(passport.session());

//google Strategy
const user = 
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ 
        googleId: profile.id,
        userName: profile.name.givenName,
        name:profile.name.familyName,
        photo:profile.photos.value

        }, function (err, user) {
      return cb(err, user);
    });
  }
));

// Retrieve an access token from spotApi
spotifyApi
.clientCredentialsGrant()
.then(data => {
    console.log(data)
    spotifyApi.setAccessToken(data.body['access_token'])})
.catch(error => console.log('Something went wrong when retrieving an access token', error));


//google route
app.get('/auth/google',
    passport.authenticate('google',{scope:["profile"]})
);

app.get("/auth/google/callback",
    passport.authenticate("google",{failureRedirect:
     "http://localhost:8000"
    }),
    function(req,res){
        res.redirect("http://localhost:8000/welcome");
    }
)

app.get("/logout",function(req,res){
    res.redirect("http://localhost:8000/")
})

app.get('/',(req,res) =>{
    res.send('hello world')
})
//db Crud routing
app.use('/api',dbRouter)
//API
app.use('/home',homeRouter)

app.listen(process.env.PORT,()=>console.log('i am Listening at',process.env.PORT))