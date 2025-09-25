'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the 'status' column to the 'quotes' table
    await queryInterface.addColumn('quotes', 'status', {
      type: Sequelize.ENUM('Pending', 'Confirmed', 'In Transit', 'Shipped', 'Delivered', 'Cancelled'),
      allowNull: false,
      defaultValue: 'Pending', // Default value is 'Pending'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the 'status' column from the 'quotes' table if we rollback
    await queryInterface.removeColumn('quotes', 'status');
  }
};
