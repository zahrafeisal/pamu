const Contact = require('../models/contacts');
const Quote = require('../models/quotes');

// Get Quotes Analytics
exports.getQuotesAnalytics = async (req, res) => {
  try {
    const statuses = await Quote.findAll({
      attributes: ['status', [Quote.sequelize.fn('COUNT', Quote.sequelize.col('status')), 'count']],
      group: ['status'],
    });

    const formattedStatuses = {};
    statuses.forEach((s) => {
      formattedStatuses[s.status] = parseInt(s.dataValues.count, 10);
    });

    res.json(formattedStatuses); // <-- only the status counts
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch quotes analytics' });
  }
};

// Get Contacts Analytics
exports.getContactsAnalytics = async (req, res) => {
  try {
    const statuses = await Contact.findAll({
      attributes: ['status', [Contact.sequelize.fn('COUNT', Contact.sequelize.col('status')), 'count']],
      group: ['status'],
    });

    const formattedStatuses = {};
    statuses.forEach((s) => {
      formattedStatuses[s.status] = parseInt(s.dataValues.count, 10);
    });

    res.json(formattedStatuses); // <-- only the status counts
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch contacts analytics' });
  }
};
