'use strict';
const fs = require('fs')
const path = require('path')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fileName = path.resolve('./') + '/us-states.csv'
    console.log({ fileName })
    const file = fs.readFileSync(fileName).toString().split('\n');
    const data = file.map(f => {
      const values = f.split(',');
      return ({
        date: values[0],
        state: values[1],
        fips: values[2],
        cases: values[3],
        deaths: values[4],
      })
    })

    await queryInterface.bulkInsert(
      'States',
      data,
      {},
    )

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('People', null, {});

  }
};
