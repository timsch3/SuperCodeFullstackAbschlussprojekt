const express = require('express');
const router = express.Router();
const spotHomeCtrl = require('../controllers/spotify-Home-Controller')
const spotifyApi = require('../config/apiConfig')

router.get('/',spotHomeCtrl.getCat)




module.exports = router