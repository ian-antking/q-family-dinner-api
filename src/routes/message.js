const express = require('express');
const messageController = require('../controllers/message');

const router = express.Router();

router.post('/enquiry', messageController.postContactMessage);

module.exports = router;
