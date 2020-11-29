const { Film } = require('../database');

function load(req, res, next, id) {
    Film.findById(id)
        .exec()
        .then((films) => {
            req.dbFilm = films;
            return next();
        }, (e) => next(e));
}

function get(req, res) {
    return res.json(req.dbFilm);
}

function index(req, res, next) {
    Film.findAll()
        .then((films) => res.json(films),
            (e) => next(e));
}

module.exports = { load, get, index };
