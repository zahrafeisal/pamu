const Newsletter = require('../models/newsletters'); 
const { Op } = require('sequelize');

// 1. Subscribe to the newsletter (Create a new newsletter)
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existingSubscriber = await Newsletter.findOne({ where: { email } });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'This email is already subscribed' });
    }

    const name = email.split('@')[0].replace(/[^\w\s]/gi, '');
    const newSubscriber = await Newsletter.create({ email, name });

    return res.status(200).json({
      message: 'Subscribed successfully!',
      subscriber: newSubscriber,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error subscribing to the newsletter',
      error: error.message,
    });
  }
};

// 2. Unsubscribe from the newsletter (Delete)
const unsubscribe = async (req, res) => {
  const { email } = req.params;
  try {
    const subscription = await Newsletter.findOne({ where: { email } });
    if (!subscription) {
      return res.status(404).json({ message: 'This email is not subscribed to the newsletter.' });
    }

    await Newsletter.destroy({ where: { email } });
    return res.status(200).json({ message: 'Successfully unsubscribed from the newsletter.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error unsubscribing from the newsletter', error: error.message });
  }
};

// 3. Fetch all subscriptions
const getAllSubscriptions = async (req, res) => {
  try {
    const newsletters = await Newsletter.findAll();
    return res.status(200).json(newsletters);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching newsletters', error: error.message });
  }
};

// 4. Get newsletter stats
const getNewsletterStats = async (req, res) => {
  try {
    const total = await Newsletter.count();

    const today = await Newsletter.count({
      where: {
        createdAt: {
          [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)), // beginning of today
        },
      },
    });

    const week = await Newsletter.count({
      where: {
        createdAt: {
          [Op.gte]: new Date(new Date().setDate(new Date().getDate() - 7)), // last 7 days
        },
      },
    });

    const latest = await Newsletter.findOne({
      order: [['createdAt', 'DESC']],
    });

    return res.status(200).json({
      total,
      today,
      week,
      latest: latest ? {
        id: latest.id,
        name: latest.name,
        email: latest.email,
        createdAt: latest.createdAt,
      } : null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching newsletter stats', error: error.message });
  }
};

module.exports = {
  subscribe,
  unsubscribe,
  getAllSubscriptions,
  getNewsletterStats,
};
