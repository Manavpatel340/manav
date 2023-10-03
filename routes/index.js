const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res , next) => {
  res.render('home', { title: 'Home' });
});

module.exports = router;
