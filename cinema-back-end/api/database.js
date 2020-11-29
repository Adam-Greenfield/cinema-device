const Sequelize = require('sequelize')

const database = new Sequelize('cinema_device', 'cinema_user', 'cinema_password', {
    host: 'localhost',
    dialect: 'postgres'
})

const Film = database.define('film', {
    title: { type: Sequelize.STRING, allowNull: false },
    duration: { type: Sequelize.INTEGER },
    img: { type: Sequelize.STRING, allowNull: true}
})

const Screen = database.define('screen', {
    capacity: { type: Sequelize.INTEGER, allowNull: false },
    number: { type: Sequelize.INTEGER, allowNull: false }
})

const Booking = database.define('booking', {
    confirmed: { type: Sequelize.BOOLEAN, default: false },
    email: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    showingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Showing',
            key: 'id',
        },
        onDelete: 'CASCADE'
    }
})

const Showing = database.define('showing', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    startDateTime: { type: Sequelize.DATE }
})

const Seat = database.define('seat', {
    available: { type: Sequelize.BOOLEAN, default: false }
})

Booking.hasMany(Seat);

Showing.hasMany(Booking);
Booking.belongsTo(Showing);

Seat.belongsTo(Screen);
Seat.belongsTo(Booking);

// create the following associations manually so we can have duplicate film + screen id
Film.belongsToMany(Screen, {
    through: { model: Showing, unique: false }
})

Screen.belongsToMany(Film, {
    through: { model: Showing, unique: false }
})

module.exports = {
    Film,
    Screen,
    Booking,
    Showing,
    Seat,
    database
}
