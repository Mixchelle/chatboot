const User = require('../models/User');
const bcrypt = require('bcrypt');

async function register(req, res) {
  const { username, password } = req.body;
  
  try {
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not create user' });
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user); 
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}

module.exports = {
  register,
  login,
};
