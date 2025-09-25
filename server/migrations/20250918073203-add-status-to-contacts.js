module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('contacts', 'status', {
      type: Sequelize.ENUM('new', 'pending', 'replied'),
      defaultValue: 'new',
      allowNull: false,
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('contacts', 'status');
  }
};
