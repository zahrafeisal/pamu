const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController'); 

// Routes for newsletter operations



// Subscribe to newsletter
router.post('/newsletters/subscribe', newsletterController.subscribe);  
// Unsubscribe from newsletter
router.delete('/newsletters/unsubscribe/:email', newsletterController.unsubscribe);  
// Get all newsletter subscriptions
router.get('/newsletters', newsletterController.getAllSubscriptions); 
// Get the new stats
router.get('/newsletters/stats', newsletterController.getNewsletterStats);


module.exports = router;
