const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Quote = sequelize.define('Quote', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryFrom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  freightType: {
    type: DataTypes.ENUM('Sea Freight', 'Air Freight', 'Land Freight', 'Rail Freight'),
    allowNull: false,
  },
  containerType: {
    type: DataTypes.ENUM('20ft', '40ft', '40ft HC'),
    allowNull: false,
  },
  specialRequirement: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Confirmed', 'In Transit', 'Shipped', 'Delivered', 'Cancelled'),
    allowNull: false,
    defaultValue: 'Pending', 
  },
    state: {
    type: DataTypes.ENUM('unseen', 'seen'),
    defaultValue: 'unseen',
    allowNull: false,
  },
}, {
  tableName: 'quotes',
  timestamps: true,
});

module.exports = Quote;
