'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('films', [
            {
                capacity: 120,
                number: 1
            },
            {
                capacity: 80,
                number: 2
            },
            {
                capacity: 94,
                number: 3
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('films', null, {});
    }
};
