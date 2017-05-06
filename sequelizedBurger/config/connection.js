var mysql = require("sequelize");

// Set up our connection information
var connection = sequelize.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection.js;
