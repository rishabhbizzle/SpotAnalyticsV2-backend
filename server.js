const dotenv = require('dotenv').config();
const app = require('./app/app');
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));