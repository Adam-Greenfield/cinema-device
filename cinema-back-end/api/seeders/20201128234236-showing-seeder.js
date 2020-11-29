'use strict';
const { Film, Screen, Showing } = require('../database');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let [films, screens] = await Promise.all([Film.findAll(), Screen.findAll(), Showing.destroy({where: {}})]);

    return queryInterface.bulkInsert('showings', [
      {
        filmId: films[0].id,
        screenId: screens[1].id,
        startDateTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filmId: films[1].id,
        screenId: screens[2].id,
        startDateTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filmId: films[2].id,
        screenId: screens[0].id,
        startDateTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filmId: films[1].id,
        screenId: screens[2].id,
        startDateTime: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});



  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('showings', null, {});
  }
};
