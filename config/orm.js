var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(ob) {

    var arr = [];

    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        queryString = queryString + ' (';
        queryString = queryString + cols.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ') ';

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, cols, vals, cb) {
        var queryString = 'DELETE FROM ' + table;
        queryString = queryString + ' WHERE ';
        queryString = queryString + cols + '=' + vals;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
