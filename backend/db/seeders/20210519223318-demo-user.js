"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@gmail.com",
          username: "demo",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jane@gmail.com",
          username: "jane",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "john@gmail.com",
          username: "john",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: ["demo", "jane", "john"],
        },
      },
      {}
    );
  },
};
