'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('contacts', 'state', {
      type: Sequelize.ENUM('unseen', 'seen'),
      allowNull: false,
      defaultValue: 'unseen',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('contacts', 'state');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_contacts_state";');
  }
};
