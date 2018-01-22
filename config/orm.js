var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (newBeer) {
        var queryString = "INSERT INTO beers (name) VALUES ??";
        connection.query(queryString, [newBeer], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (beerName) {
        var queryString = "UPDATE beers SET drank = ? WHERE name = ?";
        connection.query(queryString, [true, beerName], function(err,result){
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;