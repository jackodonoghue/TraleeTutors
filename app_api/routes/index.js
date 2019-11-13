const express = require('express');
const router = express.Router();


const ctrlGrinds = require('../controllers/grinds');
// const ctrlReviews = require('../controllers/reviews');
const ctrlUsers = require('../controllers/users');

//users

router
  .route('/')
  .post(ctrlUsers.saveNewUser);

module.exports = router;
