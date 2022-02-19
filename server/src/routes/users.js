const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    User.find(function(err, users) {
        res.json(users);
    });
});

module.exports = router;
