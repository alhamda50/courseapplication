const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = new express();
app.use(morgan('dev'));

app.use(cors());
const bRoute = require('./routes/basicRoutes');
app.use('/course', bRoute);

require('dotenv').config();

require('./db/connection');




app.listen(3000, () => {
    console.log("server is up on port 3000");
})