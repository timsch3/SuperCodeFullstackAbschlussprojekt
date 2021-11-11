const express = require('express');

const dbCtrl = require('../controllers/db-Crud-controller')

const router = express.Router();

router.post('/test',dbCtrl)

module.exports = router;