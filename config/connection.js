var mysql = require("mysql");

//Global variable used for determining the server connection type (locally or through Heroku)
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: "root",
        password: "Druworld01!",
        database: "burgers_db"
    });
}

module.exports = connection;
