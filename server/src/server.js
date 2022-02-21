const express = require('express');
const dotenv = require('dotenv');
const app = express();

require('./db/mongo');

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

dotenv.config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on ${PORT}`));
