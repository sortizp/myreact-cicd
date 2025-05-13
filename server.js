const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.send('Hello Worl'));

/* app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`)); */

module.exports = app;
