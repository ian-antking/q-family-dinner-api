const express = require('express');
const eventController = require('../controllers/event');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, eventController.postEvent);
router.get('/', eventController.getEvents);
router.put('/:id', auth, eventController.updateEvent);
router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;
