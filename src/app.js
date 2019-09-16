const express = require('express');
const eventRouter = require('./routes/event');
const mapRouter = require('./routes/map');
const messageRouter = require('./routes/message');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/event', eventRouter);
app.use('/map', mapRouter);
app.use('/message', messageRouter);

app.get('*', (_, res) => {
  res.redirect('/');
});

module.exports = app;
