const express = require('express');
const router = express.Router();

const ctrlGrinds = require('../controllers/grinds');
const ctrlOthers = require('../controllers/others');
const ctrlUsers = require('../controllers/users');

/* Grinds pages */
router.get('/login', ctrlUsers.login);
router.get('/grinds', ctrlGrinds.grinds);
router.get('/grinds/' + ctrlGrinds.grindInfo.id, ctrlGrinds.bookGrinds);

/* Register Page */
router
    .route('/')
    .get(ctrlUsers.loadRegister)
    .post(ctrlUsers.register);

module.exports = router;
