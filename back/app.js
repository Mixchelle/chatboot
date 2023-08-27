const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');


app.use('/auth', authRoutes);


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
