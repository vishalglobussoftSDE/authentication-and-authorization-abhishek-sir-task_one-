import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization header missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Optionally fetch the user from DB (if needed for validation or user info)
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found or token invalid' });
    }

    // Attach user to request object
    req.user = user;

    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    return res.status(401).json({ message: 'Unauthorized access' });
  }
};

export default auth;
