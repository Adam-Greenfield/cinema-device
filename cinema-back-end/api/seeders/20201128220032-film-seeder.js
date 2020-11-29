'use strict';
const { Film } = require('../database');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await Film.destroy({where: {}})

        return queryInterface.bulkInsert('films', [
            {
                title: 'Pride and Porpoises',
                duration: 90,
                img: '',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Hens and Sensibility',
                duration: 88,
                img: '',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Wuthering Kites',
                duration: 105,
                img: '',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Hake Expectations',
                duration: 79,
                img: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('films', null, {});
    }
};
