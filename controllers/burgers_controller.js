var express = require("express");
var router = express.Router();
var order = require("../models/burger.js");


router.get("/", function(req, res) {
    res.redirect('/orders');
});

router.get('/orders', function(req, res) {
    order.selectAll(function(data) {
        var sObject = { burgers: data };
        console.log(sObject);
        res.render('index', sObject);
    });
});

router.post('/orders/new', function(req, res) {
    order.insertOne(['burger_name', 'devoured'], [req.body.burger, 0], function() {
        res.redirect('/orders');
    });
});

router.put('/orders/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    order.updateOne({ devoured: req.body.devoured }, condition, function() {
        res.redirect('/orders');
    });
});

router.delete('/orders/delete/:id', function(req, res) {
    var condition = req.params.id;
    order.deleteOne('id', condition, function() {
        res.redirect('/orders');
    });
});

module.exports = router;
