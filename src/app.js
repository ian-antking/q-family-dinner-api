const express = require('express');
const eventRouter = require('./routes/event');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/event', eventRouter);

// app.get('*', (_, res) => {
//   res.redirect('/');
// });

module.exports = app;
