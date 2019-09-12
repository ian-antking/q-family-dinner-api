/* eslint-disable no-console */
const app = require('./src/app');

const port = process.env.PORT || 4000;

console.log(`App running on 127.0.0.1:${port}`);
app.listen(port);
