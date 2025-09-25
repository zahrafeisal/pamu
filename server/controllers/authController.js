const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');  

const JWT_SECRET = process.env.JWT_SECRET || 'yourjwtsecretkey'; 

// 1. User Login (Authenticate)
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password with the stored hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',  
    });

    return res.status(200).json({ message: 'Login successful', token, role: user.role, });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// 2. Verify JWT Token (middleware)
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header (Bearer token)
  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// 3. User Logout (Clear client-side token)
const logout = (req, res) => {
  try {
    return res.status(200).json({ message: 'Logout successful. Please remove your token from client-side storage.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error logging out', error: error.message });
  }
};

module.exports = {
  login,
  verifyToken,
  logout,
};
