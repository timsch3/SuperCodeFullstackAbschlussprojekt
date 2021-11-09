const express = require('express');

const TestCtrl = require('../controllers/test-controller')

const router = express.Router();

router.post('/test',TestCtrl)


module.exports = router;