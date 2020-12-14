'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	return await queryInterface.bulkInsert('Users', [
    {
      name: "Manuel Mosquera",
      email: "mosquera.manuel2011@gmail.com",
      password: "$2y$10$8rwK3TpPkOiLgQHgV2iY0OBWpBx7Ibv5VS5GAqvRgvlkOUFC0L6Nq",
    },
    {
      name: "Andrés Restrepo",
      email: "restrepo.ingeniero2018@gmail.com",
      password: "$2y$10$J3q8ggoz4zzShrtCSoCDJ.04EovKTfaGDmCJl7TdGtnyQeMZ4Y2J.",
    },
    {
      name: "Clara Marín",
      email: "claramarmfs@gmail.com",
      password: "$2y$10$K1j0PlTz/I/ZjbSssuBx3eSym0.KL81gZZ5DvMZgU9KsSEJzLKtL2",
    },
    {
      name: "Luis Parrado",
      email: "luisprmat@hotmail.com",
      password: "$2y$10$YmEs.hFxQ.w7Uic4H.zAvuO5GU/jk447EoR3WBT9PJyC28cZ3OsQy",
    }
	])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
