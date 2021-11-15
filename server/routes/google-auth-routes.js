const express = require('express');
const router = express.Router();
const passport = require('passport');
const authCtrl = require('../controllers/google-auth-controller')
//google route
router.get('/google',authCtrl.google);

router.get("/google/callback",authCtrl.googleCall,authCtrl.googleBack)

router.get("/logout",authCtrl.logout)


module.exports = router