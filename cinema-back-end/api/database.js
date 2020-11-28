const Sequelize = require('sequelize')

const database = new Sequelize({
    database: 'movie_catalog',
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
})

const Film = database.define('film', {
    title: { type: Sequelize.JSONB, allowNull: false },
    lengthInMins: { type: Sequelize.INTEGER },
    img: { type: Sequelize.STRING, allowNull: true}
})

const Screen = database.define('screen', {
    capacity: { type: Sequelize.INTEGER, allowNull: false },
    number: { type: Sequelize.INTEGER, allowNull: false }
})

const Booking = database.define('booking', {
    confirmed: { type: Sequelize.BOOLEAN },
    email: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING }
})

const Showing = database.define('showing', {
    dateTime: { type: Sequelize.DATE }
})

const Seat = database.define('seat', {
    available: { type: Sequelize.BOOLEAN, default: false }
})

Booking.belongsTo(Showing);
Booking.hasMany(Seat);

Seat.belongsTo(Screen);
Seat.belongsTo(Booking);

Film.belongsToMany(Screen, {
    through: Showing
})

Screen.belongsToMany(Film, {
    through: Showing
})


module.exports = {
    Film,
    Screen,
    Booking,
    Showing,
    Seat
}
