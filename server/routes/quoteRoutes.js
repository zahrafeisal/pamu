const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

// Routes for quotes

// Create a quote
router.post('/quotes', quoteController.createQuote);  
// Delete a quote
router.delete('/quotes/:id', quoteController.deleteQuote);  
// Get all quotes
router.get('/quotes', quoteController.getAllQuotes);  
// Get quote by ID
router.get('/quotes/:id', quoteController.getQuoteById);  
// Get quotes by status
router.get('/quotes/status/:status', quoteController.getQuotesByStatus);  
// Update a quote
router.put('/quotes/:id', quoteController.updateQuote);  

module.exports = router;
