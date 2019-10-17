const express = require('express');
const router = express.Router();
const ctrlGrinds = require('../controllers/grinds');
// const ctrlReviews = require('../controllers/reviews');
const ctrlUsers = require('../controllers/users');

// // Grinds
// router
//   .route('/grinds')
//   .get(ctrlGrinds.grindsListByCourse)
//   .post(ctrlGrinds.grindsCreate);

router
  .route('/grinds/:title')
  .get(ctrlGrinds.grindsReadOne);
  // .put(ctrlGrinds.grindsUpdateOne)
  // .delete(ctrlGrinds.grindsDeleteOne);
  
// // reviews
// router
//   .route('/grinds/:grindid/reviews')
//   .post(ctrlReviews.reviewsCreate);

// router
//   .route('/grinds/:grindid/reviews/:reviewid')
//   .get(ctrlReviews.reviewsReadOne)
//   .put(ctrlReviews.reviewsUpdateOne)
//   .delete(ctrlReviews.reviewsDeleteOne);


//Users
router
  .route('/register')
  .post(ctrlUsers.saveMe);


router
  .route('/login')
  .post(ctrlUsers.usersReadOne);

module.exports = router;
