const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Newsletter model
const Newsletter = sequelize.define('Newsletter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,  // 'name' is required, but we'll handle fallback in hook
  },
}, {
  tableName: 'newsletters',
  timestamps: true,
});

// Ensure 'name' is populated before creating the subscription
Newsletter.beforeCreate((newsletter, options) => {
  const emailParts = newsletter.email.split('@');
  
  if (emailParts[0]) {
    // Extract the part of the email before the '@' and clean it
    newsletter.name = emailParts[0].replace(/[^\w\s]/gi, '');
    console.log(`Before create hook - email: ${newsletter.email}, generated name: ${newsletter.name}`);
  } else {
    // If email format is invalid, assign a fallback name
    newsletter.name = 'Unknown';
    console.log(`Before create hook - email: ${newsletter.email}, fallback name: Unknown`);
  }
});

module.exports = Newsletter;
