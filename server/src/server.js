const express = require('express');
const app = express();

// Routess Path
const usersRouter = require('./routes/users');

// Routess
app.use('/api/users', usersRouter);

// Database connection
require('./db/mongo');
const PORT = 4000;
app.listen(PORT, console.log(`Server started on ${PORT}`));