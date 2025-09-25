const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Get all unseen notifications
router.get('/', notificationController.getAllNotifications);

// Mark a notification as seen by type and ID
router.put('/:type/:id', notificationController.markAsSeen);

// Mark all notifications as seen
router.put('/mark-all-seen', notificationController.markAllAsSeen);

module.exports = router;
