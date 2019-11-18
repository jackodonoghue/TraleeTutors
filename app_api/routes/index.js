const express = require('express');
const router = express.Router();


const ctrlGrinds = require('../controllers/grinds');

const ctrlUsers = require('../controllers/users');

//users

router
  .route('/')
  .post(ctrlUsers.saveNewUser);

router
.route('/login')
.post(ctrlUsers.login);

router
  .route('/remove')
  .delete(ctrlUsers.removeUser);

router
  .route('/update')
  .put(ctrlUsers.update);

//Grinds

router
  .route('/grinds')
  .get(ctrlGrinds.grindsList);

router
  .route('/grinds/:grindid')
  .get(ctrlGrinds.getOneGrind);


module.exports = router;
