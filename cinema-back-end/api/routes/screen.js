var express = require('express');
var router = express.Router();
var screenController = require('../controllers/screenController');

router.route('/')
    .get(screenController.index)

router.route('/:screenId')
    .get(screenController.get)


router.param('screenId', screenController.load);

module.exports = router;
