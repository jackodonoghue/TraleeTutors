const express = require('express');
const router = express.Router();

const ctrlGrinds = require('../controllers/grinds');
const ctrlOthers = require('../controllers/others');
const ctrlUsers = require('../controllers/users');

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

/* Login Page */
router
    .route('/login')
    .get(ctrlUsers.loadLogin)
    .post(ctrlUsers.login);

router.get('/login/invalid_details', ctrlUsers.loadLoginErr);
    
module.exports = router;
