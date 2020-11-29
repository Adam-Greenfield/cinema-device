var express = require('express');
var router = express.Router();
var filmController = require('../controllers/filmController');

router.route('/')
    .get(filmController.index)

router.route('/:filmId')
    .get(filmController.get)


router.param('filmId', filmController.load);

module.exports = router;
