const mssql = require("mssql");
const mssqlConfig = require("./mssql-config");

// Configure Connection Pool with Configuration Object and async connect
// const pool1 = new mssql.ConnectionPool(mssqlConfig, err => {
//   console.error("MSSQL Pool Connect Error", err);
// });

const pool = async () => {
  try {
    await mssql.connect(mssqlConfig);
  } catch (err) {
    console.error("MSSQL Connect Error", err);
  }
};

module.exports = pool;
