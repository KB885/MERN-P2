const mongo = require('mongoose');

mongo.connect('mongodb://127.0.0.1:27017/p2')

// Database events
const db = mongo.connection;

db.on("error", function() {
    console.log("There was a connection error");
})

db.once("open", function () {
    console.log("Connected successfully");
});

db.on("reconnect", function () {
    console.log("Reconnected successfully");
});
