var orm = require("../config/orm.js");

var beer = {
    all: function (cb) {
        orm.all("beers", function (res) {
            cb(res);
        });
    },
    create: function (vals, cb) {
        orm.create("beers", vals, function (res) {
            cb(res);
        });
    },
    update: function (objColsVals, condition, cb) {
        orm.update("beers", objColsVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("beers", condition, function(res){
            cb(res);
        })
    }
 };

 module.exports = beer;