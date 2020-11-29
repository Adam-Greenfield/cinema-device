const { Booking } = require('../database');

function load(req, res, next, id) {
    Booking.findById(id)
        .exec()
        .then((bookings) => {
            req.dbBooking = bookings;
            return next();
        }, (e) => next(e));
}

function get(req, res) {
    return res.json(req.dbBooking);
}

function create(req, res, next) {
    Booking.create({
        email: req.body.email,
        name: req.body.name
    })
        .then((savedBooking) => {
            return res.json(savedBooking);
        }, (e) => next(e));
}

function update(req, res, next) {
    const booking = req.dbBooking;
    Object.assign(booking, req.body);

    booking.save()
        .then((savedBooking) => res.sendStatus(204),
            (e) => next(e));
}

function index(req, res, next) {
    Booking.findAll()
        .then((bookings) => res.json(bookings),
            (e) => next(e));
}

function remove(req, res, next) {
    const booking = req.dbBooking;
    booking.remove()
        .then(() => res.sendStatus(204),
            (e) => next(e));
}

module.exports = { load, get, create, update, index, remove };
