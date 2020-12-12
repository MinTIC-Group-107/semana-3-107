'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	return await queryInterface.bulkInsert('Users', [
    {
      name: "Manuel Mosquera",
      email: "mosquera.manuel2011@gmail.com",
      password: "$2y$10$8rwK3TpPkOiLgQHgV2iY0OBWpBx7Ibv5VS5GAqvRgvlkOUFC0L6Nq",
      profile: "Administrador de empresas apasionado por la programación y el parkour.",
      role: "Administrador",
      image: "https://i.imgur.com/bcwNbiI.jpg",
    },
    {
      name: "Andrés Restrepo",
      email: "restrepo.ingeniero2018@gmail.com",
      password: "$2y$10$J3q8ggoz4zzShrtCSoCDJ.04EovKTfaGDmCJl7TdGtnyQeMZ4Y2J.",
      profile: "Ingeniero de Telecomunicaciones de la Universidad de Antioquia amante al fútbol, la lectura, la cerveza y la programación. Tengo 30 años.",
      role: "Desarrollador Backend",
      image: "https://i.imgur.com/AYuV0WA.jpg",
    },
    {
      name: "Clara Marín",
      email: "claramarmfs@gmail.com",
      password: "$2y$10$K1j0PlTz/I/ZjbSssuBx3eSym0.KL81gZZ5DvMZgU9KsSEJzLKtL2",
      profile: "Clara Ines Marín\n Lic Biología y Química\n Universidad del Valle\n Disfruto de la música, el teatro, la lectura.",
      role: "Desarrollador Frontend",
      image: "https://i.imgur.com/1D06g9x.jpg",
    },
    {
      name: "Luis Parrado",
      email: "luisprmat@hotmail.com",
      password: "$2y$10$YmEs.hFxQ.w7Uic4H.zAvuO5GU/jk447EoR3WBT9PJyC28cZ3OsQy",
      profile: "Matemático, Universidad Nacional, apasionado por la programación, los viajes y la música.",
      role: "Desarrollador FullStack",
      image: "https://i.imgur.com/MtO1eYA.jpg",
    }
	])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
