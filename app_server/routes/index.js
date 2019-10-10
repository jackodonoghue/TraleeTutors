const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.register);
router.get('/login', ctrlLocations.login);
router.get('/discoverGrinds', ctrlLocations.discoverGrinds);
router.get('/bookGrinds', ctrlLocations.bookGrinds);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
