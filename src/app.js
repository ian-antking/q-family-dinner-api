const express = require('express');
const eventRouter = require('./routes/event');
const userRouter = require('./routes/user');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/event', eventRouter);
app.use('/user', userRouter);

// app.get('*', (_, res) => {
//   res.redirect('/');
// });

module.exports = app;
