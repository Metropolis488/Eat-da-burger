var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burgerName, function(result) {
        console.log("Got here CONTROLLER 2")
        res.json(result);
        console.log(result)
        console.log("Got here CONTROLLER 3")
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
    {
        devoured: req.body.devoured
    }, 
    condition, function(result) {
        if (result.changeRows == 0) {
        return res.status(404).end();
    } 
    res.status(200).end();
    
});
})

module.exports = router;