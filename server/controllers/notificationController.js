// controllers/notificationController.js
const Contact = require('../models/contacts');
const Quote = require('../models/quotes');

module.exports = {
  // 1. Get all unseen notifications
  getAllNotifications: async (req, res) => {
    try {
      const unseenContacts = await Contact.findAll({
        where: { state: 'unseen' },
        order: [['createdAt', 'DESC']],
      });

      const unseenQuotes = await Quote.findAll({
        where: { state: 'unseen' },
        order: [['createdAt', 'DESC']],
      });

      return res.status(200).json({
        contacts: unseenContacts,
        quotes: unseenQuotes,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch notifications' });
    }
  },

  // 2. Mark a notification as seen by ID
  markAsSeen: async (req, res) => {
    try {
      const { type, id } = req.params; // type: 'contact' | 'quote'

      let updated;
      if (type === 'contact') {
        updated = await Contact.update(
          { state: 'seen' },
          { where: { id } }
        );
      } else if (type === 'quote') {
        updated = await Quote.update(
          { state: 'seen' },
          { where: { id } }
        );
      } else {
        return res.status(400).json({ error: 'Invalid type parameter' });
      }

      if (updated[0] === 0) {
        return res.status(404).json({ error: 'Notification not found' });
      }

      return res.status(200).json({ message: 'Notification marked as seen' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update notification' });
    }
  },

  // 3. Mark all notifications as seen
  markAllAsSeen: async (req, res) => {
    try {
      await Contact.update({ state: 'seen' }, { where: { state: 'unseen' } });
      await Quote.update({ state: 'seen' }, { where: { state: 'unseen' } });

      return res.status(200).json({ message: 'All notifications marked as seen' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update notifications' });
    }
  },
};
