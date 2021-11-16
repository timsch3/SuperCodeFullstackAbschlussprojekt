const express = require('express');
const router = express.Router();
const passport = require('passport');
const authCtrl = require('../controllers/google-auth-controller')
//google route
router.get('/google',authCtrl.google);

router.get("/google/callback",authCtrl.googleCall,authCtrl.googleBack)

router.get("/logout",authCtrl.logout)

router.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
    }
  });

  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
  });

module.exports = router