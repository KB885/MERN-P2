const User = require('../models/User');

exports.list = (req, res) => {
    User.find(function(err, users) {
        res.json(users);
    });
  }
