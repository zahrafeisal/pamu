const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authenticate = require('../middleware/auth');

// User routes (protected routes)


// Profile routes (authenticated user)
router.get('/users/me', authenticate, userController.getProfile); 
router.put('/users/me', authenticate, userController.updateProfile);


// Get all users
router.get('/users', userController.getAllUsers);  
// Get user by ID
router.get('/users/:id', userController.getUserById);  
// Create new user
router.post('/users', userController.createUser);  
// Update user
router.put('/users/:id', userController.updateUser);  
// Delete user
router.delete('/users/:id', userController.deleteUser);  


module.exports = router;
