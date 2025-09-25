const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactsController');  

// Routes for contact operations

// Create a contact
router.post('/contacts', contactController.createContact);  
// Get all contacts
router.get('/contacts', contactController.getAllContacts);  
// Get contact by ID
router.get('/contacts/:id', contactController.getContactById);  
// Delete a contact
router.delete('/contacts/:id', contactController.deleteContact);  
// Update contact status
router.patch('/contacts/:id/status', contactController.updateStatus);
module.exports = router;
