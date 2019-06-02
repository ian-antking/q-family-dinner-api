const express = require('express');
const eventController = require('../controllers/event');

const router = express.Router();

router.post('/', eventController.postEvent);
router.get('/', eventController.getEvents);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
