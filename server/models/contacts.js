const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('new', 'pending', 'replied'),
    defaultValue: 'new',  // default to 'new'
    allowNull: false,
  },
  state: {
    type: DataTypes.ENUM('unseen', 'seen'),
    defaultValue: 'unseen',
    allowNull: false,
  },
}, {
  tableName: 'contacts',
  timestamps: true,
});

module.exports = Contact;
