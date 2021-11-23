const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user-model')
require("dotenv").config();

const user =
  passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, done) {
 
    User.find({ googleid: profile.id }).then(user => {
     console.log(user)
      if (user.length > 0) {
          console.log('user already exist')
          done(null, user);
      } else {
          new User({ 
            _id: profile.id,
            googleid: profile.id,
            username: profile.name.givenName,
            name:profile.name.familyName,
            photo:profile._json.picture 
    
            }).save()
              .then(() => {
                  console.log('user created')
                  done(null, user);
              })
      }
  })
  }
));
