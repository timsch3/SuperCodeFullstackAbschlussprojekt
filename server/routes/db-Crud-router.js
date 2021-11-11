const express = require('express');

const dbCtrl = require('../controllers/db-Crud-controller')

const router = express.Router();

router.post('/userdata',dbCtrl.createUserData )
router.put('/userdata/:id',dbCtrl.updateUserData)
router.delete('/userdata/:id',dbCtrl.deleteUserData)
router.get('/userdata/:id',dbCtrl.getUserDataByID)
router.get('/userdata',dbCtrl.getUserData)


module.exports = router;