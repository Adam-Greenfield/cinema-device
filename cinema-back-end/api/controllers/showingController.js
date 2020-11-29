const { Showing } = require('../database');

function load(req, res, next, id) {
    Showing.findById(id)
        .exec()
        .then((showings) => {
            req.dbShowing = showings;
            return next();
        }, (e) => next(e));
}

function get(req, res) {
    return res.json(req.dbShowing);
}

function create(req, res, next) {
    Showing.create({
        email: req.body.email,
        name: req.body.name
    })
        .then((savedBooking) => {
            return res.json(savedBooking);
        }, (e) => next(e));
}

function update(req, res, next) {
    const showing = req.dbShowing;
    Object.assign(showing, req.body);

    showing.save()
        .then((savedBooking) => res.sendStatus(204),
            (e) => next(e));
}

function index(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Showing.find()
        .skip(skip)
        .limit(limit)
        .exec()
        .then((showings) => res.json(showings),
            (e) => next(e));
}

function remove(req, res, next) {
    const showing = req.dbShowing;
    showing.remove()
        .then(() => res.sendStatus(204),
            (e) => next(e));
}

module.exports = { load, get, create, update, index, remove };
