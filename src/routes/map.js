const express = require('express');
const mapController = require('../controllers/map');

const router = express.Router();

router.get('/', mapController.getMapData);

module.exports = router;
