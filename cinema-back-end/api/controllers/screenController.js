const { Screen } = require('../database');

function load(req, res, next, id) {
    Screen.findById(id)
        .exec()
        .then((screens) => {
            req.dbScreen = screens;
            return next();
        }, (e) => next(e));
}

function get(req, res) {
    return res.json(req.dbScreen);
}

function index(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Screen.find()
        .skip(skip)
        .limit(limit)
        .exec()
        .then((screens) => res.json(screens),
            (e) => next(e));
}

module.exports = { load, get, index };
