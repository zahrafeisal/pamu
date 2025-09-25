const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/quotes', analyticsController.getQuotesAnalytics);
router.get('/contacts', analyticsController.getContactsAnalytics);

module.exports = router;
