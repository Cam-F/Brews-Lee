var express = require("express");

var beer = require("../models/beer.js");

var router = express.Router();

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
    beer.create(["name"], [req.body.name], function (results) {
        console.log(results);
    });
});

router.put("/api/beers/:id", function (req, res) {
    beer.update(["id"], [req.params.id], function (results) {
        console.log(results);
    });
});

module.exports = router;