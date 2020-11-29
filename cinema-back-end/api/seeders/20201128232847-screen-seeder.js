'use strict';
const { Screen } = require('../database');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await Screen.destroy({where: {}})

        return queryInterface.bulkInsert('screens', [
            {
                capacity: 120,
                number: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                capacity: 80,
                number: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                capacity: 94,
                number: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('screens', null, {});
    }
};
