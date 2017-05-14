var express = require("express");
var router = express.Router();
var Sequelize = require("sequelize");
var sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('seqBurgers_db', 'root', 'Druworld01!', {
        host: 'localhost',
        dialect: 'mysql'
    });
}


var Burger = require("../models/burger.js")(sequelize);


router.get("/", function(req, res) {
    res.redirect('/orders');
});

router.get('/orders', function(req, res) {
    Burger.findAll().then(function(data) {
        var sObject = { burgers: data };
        console.log(sObject);
        res.render('index', sObject);
    });
});

router.post('/orders/new', function(req, res) {
    Burger.create({
        burger_name: req.body.burger
    }).then(function() {
        res.redirect('/orders');
    });
});

router.put('/orders/update/:id', function(req, res) {
    var id = req.params.id;
    Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: id
            }
        }

    ).then(function() {
        res.redirect('/orders');
    });

});

router.delete('/orders/delete/:id', function(req, res) {
    var id = req.params.id;
    Burger.destroy({
        where: {
            id: id
        }
    }).then(function() {
        res.redirect('/orders');
    });
});

module.exports = router;
