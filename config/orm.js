var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (name, cb) {
        var queryString = "INSERT INTO beers (name) VALUES ??";
        connection.query(queryString, [name], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (name, cb) {
        var queryString = "UPDATE beers SET drank = true WHERE name = ?";
        connection.query(queryString, [name], function(err,result){
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;