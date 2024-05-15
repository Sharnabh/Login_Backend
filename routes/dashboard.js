const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Blacklist = require('../models/blacklist')

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1]
  const blacklist = await Blacklist.findOne({ where: { token } })

  if (!token) {
    return res.status(401).json({ message: 'No Token' });
  }
  if(blacklist){
    console.log(blacklist, !blacklist)
    return res.status(401).json({ message: 'Token Blacklisted' });
  }
  

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token not match' });
    }
    req.userId = decoded.id;
    next();
  });
};

router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the dashboard' });
});

module.exports = router;
