const express = require('express');
const mapController = require('../controllers/map');

const router = express.Router();

router.get('/', mapController.getThreeWords);

module.exports = router;
