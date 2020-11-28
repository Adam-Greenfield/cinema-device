'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('films', [
            {
                title: "Pride and Porpoises",
                duration: 90,
                img: ""
            },
            {
                title: "Hens and Sensibility",
                duration: 88,
                img: ""
            },
            {
                title: "Wuthering Kites",
                duration: 105,
                img: ""
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('films', null, {});
    }
};
