'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quotes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryFrom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      freightType: {
        type: Sequelize.ENUM('Sea Freight', 'Air Freight', 'Land Freight', 'Rail Freight'),
        allowNull: false,
      },
      containerType: {
        type: Sequelize.ENUM('20ft', '40ft', '40ft HC'),
        allowNull: false,
      },
      specialRequirement: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('quotes');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_quotes_freightType";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_quotes_containerType";');
  },
};
