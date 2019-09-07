const { promisify } = require("util");
const mysql = require("mysql");
const dbconfig = require("./dbconfig");

// Configure Connection Pool with Configuration Object
const pool = mysql.createPool(dbconfig);

// Connect to database or react to errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database Connection was lost");
    } else if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database is at maximum simultaneous Connections");
    } else if (err.code === "ECONNREFUSED") {
      console.error("Database Connection was Refused");
    } else {
      console.error(err.code);
    }
  }
  if (connection) connection.release();
  console.log("Database Connection was Successful");
});

// Prepare pool for Async Await using promisify
pool.query = promisify(pool.query);

module.exports = pool;
