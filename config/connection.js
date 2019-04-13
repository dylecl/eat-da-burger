var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db2"
});



connection.connect(function(err) {
    if (err) {
        console.log("error connecting:\n" + err);
        return;
    };
    console.log("connected as ID: " + connection.threadId)
})

module.exports = connection;