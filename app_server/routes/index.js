const express = require('express');
const router = express.Router();

const ctrlGrinds = require('../controllers/grinds'); 
const ctrlOthers = require('../controllers/others');

/* Grinds pages */
router.get('/register', ctrlGrinds.register);
router.get('/login', ctrlGrinds.login);
router.get('/grinds', ctrlGrinds.grinds);
router.get('/grinds/grind', ctrlGrinds.bookGrinds);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
