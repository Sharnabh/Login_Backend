const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs');
const config = require('../config/config')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

const Blacklist = sequelize.define('blacklistTokens', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});

module.exports = Blacklist;
