const express = require('express');
const mapController = require('../controllers/map');

const router = express.Router();

router.post('/', mapController.getThreeWords);

module.exports = router;
