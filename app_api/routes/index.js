const express = require('express');
const router = express.Router();
const ctrlGrinds = require('../controllers/grinds');
const ctrlReviews = require('../controllers/reviews');

// Grinds
router
  .route('/grinds')
  .get(ctrlGrinds.grindsListByCourse)
  .post(ctrlGrinds.grindsCreate);

router
  .route('/grinds/:grindid')
  .get(ctrlGrinds.grindsReadOne)
  .put(ctrlGrinds.grindsUpdateOne)
  .delete(ctrlGrinds.grindsDeleteOne);
  
// reviews
router
  .route('/grinds/:grindid/reviews')
  .post(ctrlReviews.reviewsCreate);

router
  .route('/grinds/:grindid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;
