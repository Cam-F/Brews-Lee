// Modules
var orm = require("../config/orm.js");

var beer = {
    all: function(cb){
        orm.selectAll("beers", function(res){
            cb(res);
        });
    },
    create: function(name, cb){
        orm.insertOne("beers", name, function(res){
            cb(res);
        });
    },
    update: function(name, cb){
        orm.updateOne("beers", name, function(res){
            cb(res);
        });
    }
}

module.exports = beer;