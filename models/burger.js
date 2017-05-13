var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },
    // The variables cols and vals are arrays. 
    //'burgers' is the name of the database table.
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(cols, vals, cb) {
        orm.deleteOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
