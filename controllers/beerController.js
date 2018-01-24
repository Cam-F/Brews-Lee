var express = require("express");

var router = express.Router();

var beer = require("../models/beer.js");

router.get("/", function (req, res) {
    beer.all(function (data) {
        var hbsObject = {
            beers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/beers", function (req, res) {
    beer.create(
        ["name"],
        [req.body.name],
        function (result) {
            res.json({ i: result.insertId });
        });
});

router.put("/api/beers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("Condition", condition);

    beer.update({
        empty: true
    }, condition, function(result){
        if (result.changedRows == 0) {
            return resizeBy.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/beers/:id", function(req,res){
    var condition = "id = " + req.params.id;

    beer.delete(condition, function(result){
        if (result.affectedRows == 0){
            return resizeBy.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;