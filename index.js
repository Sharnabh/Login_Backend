require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./config/config')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard')

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
