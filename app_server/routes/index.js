const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.register);
router.get('/login', ctrlLocations.login);
router.get('/grinds', ctrlLocations.grinds);
router.get('/grinds/grind', ctrlLocations.bookGrinds);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
