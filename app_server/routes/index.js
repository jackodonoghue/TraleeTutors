const express = require('express');
const router = express.Router();

const ctrlGrinds = require('../controllers/grinds');
const ctrlUsers = require('../controllers/users');
const ctrlOthers = require('../controllers/others');

/* Home page */
router
    .route('/')
    .get(ctrlOthers.loadIndex);

/* Grinds pages */
router.get('/grinds', ctrlGrinds.grinds);

router.get('/grinds/:grindid', ctrlGrinds.bookGrinds);

/* Register Page */
router
    .route('/register')
    .get(ctrlUsers.loadRegister)
    .post(ctrlUsers.register);


/* Remove Account */
router
    .route('/remove-account')
    .get(ctrlUsers.loadRemove)
    .post(ctrlUsers.remove);

/* Login Page */
router
    .route('/login')
    .get(ctrlUsers.loadLogin)
    .post(ctrlUsers.login);

/* Update Account */
router
    .route('/update-account')
    .get(ctrlUsers.loadUpdate)
    .post(ctrlUsers.update);

router.get('/login/invalid_details', ctrlUsers.loadLoginErr);


module.exports = router;
