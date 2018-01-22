var db = require("/connection.js");

db.getConnection(function(err, connection){
    console.log("Connected on ORM");
});