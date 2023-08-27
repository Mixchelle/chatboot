const User = require('../models/User');
const bcrypt = require('bcrypt');

async function registerUser(username, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    return user;
  } catch (error) {
    throw new Error('Could not create user');
  }
}

async function loginUser(username, password) {
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error) {
    throw new Error('An error occurred');
  }
}

module.exports = {
  registerUser,
  loginUser,
};
