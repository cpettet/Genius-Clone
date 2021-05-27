"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@gmail.com",
          username: "demo",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          email: "jane@gmail.com",
          username: "jane",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
        },
        {
          email: "john@gmail.com",
          username: "john",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2021-05-24 17:35:02.576-07",
          updatedAt: "2021-05-24 17:35:02.576-07",
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
