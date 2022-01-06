'use strict';
const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const fileName = __dirname + '/us-states.csv'
     const file = fs.readFileSync(fileName).toString().split('\n');
     const data = file.map(f => {
       const values = f.split(',');
       return ({
         date: values[0],
         state: values[1],
         fips: Number(values[2]) || 0,
         cases: Number(values[3]) || 0,
         deaths: Number(values[4]) || 0,
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
  }
};
