const passport = require('passport');

const google = passport.authenticate('google', { scope: ["profile"] })

const googleCall = passport.authenticate("google", {
    failureRedirect:
      "http://localhost:8000"
  })

  const googleBack = (req, res) =>{
      console.log(req)
    res.redirect("http://localhost:8000/welcome");
  
}
 
  const logout = (req, res) => {
    console.log('user logout')
  req.logout()
  res.redirect("http://localhost:8000/")
}

module.exports = {google,googleCall,googleBack,logout}