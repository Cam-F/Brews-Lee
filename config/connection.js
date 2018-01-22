var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pinkwindow420',
    database: 'beer_db'
});

connection.connect(function(err){
    if (err){
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});


module.export = connection;